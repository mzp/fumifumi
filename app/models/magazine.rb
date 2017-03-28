# frozen_string_literal: true

class Magazine < ApplicationRecord
  scope :finished, -> { where.not(finished_at: nil) }
  scope :recent, -> { order('original_filename DESC') }
  scope :old, -> { order('original_filename ASC') }

  has_many :pages, -> { order(:no) }
  has_many :episodes
  belongs_to :series, required: false

  has_attached_file :source
  validates_attachment :source,
                       presence: true,
                       content_type: { content_type: %r{\Aapplication/epub.*\z} }

  def cover
    pages.first
  end

  def episode_pages
    @episode_pages ||= pages.slice_before(&:episode).reject(&:empty?)
  end

  concerning :Navigation do
    def next
      series&.magazines&.old&.find_by('original_filename >= ? AND id != ?', original_filename, id)
    end

    def prev
      series&.magazines&.recent&.find_by('original_filename <= ? AND id != ?', original_filename, id)
    end
  end

  concerning :Import do
    def reset!
      pages.delete_all
      episodes.delete_all
    end

    def import!(book)
      update! title: book.title, finished_at: Time.current
      book.cover.each do |page|
        pages.create!(page.to_h)
      end
      book.episodes.each do |episode|
        episodes.build.import!(episode)
      end
    end
  end
end

# frozen_string_literal: true
class Magazine < ApplicationRecord
  scope :finished, -> { where.not(finished_at: nil) }

  has_many :pages, -> { order(:no) }
  has_many :episodes

  has_attached_file :source
  validates_attachment :source,
                       presence: true,
                       content_type: { content_type: %r{\Aapplication/epub.*\z} }

  def cover
    pages.first
  end

  def reset!
    pages.delete_all
    episodes.delete_all
  end

  def episode_pages
    @episode_pages ||= pages.slice_before(&:episode).reject(&:empty?)
  end
end

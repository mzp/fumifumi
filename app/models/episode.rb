# frozen_string_literal: true

class Episode < ApplicationRecord
  include Searchable

  belongs_to :magazine
  has_many :pages, -> { order(:no) }

  scope :sorted, lambda {
    all.sort_by { |episode| episode.page.no }
  }

  def page
    pages.first
  end

  concerning :Navigation do
    def next
      magazine.pages.find_by('no > ? AND episode_id <> ?', page.no, id)&.episode
    end

    def prev
      magazine.pages.reverse_order.find_by('no < ? AND episode_id <> ?', page.no, id)&.episode
    end
  end

  concerning :Import do
    def import!(episode)
      attributes = episode.to_hash(symbolize_keys: true)

      update!(attributes.except(:pages, :anchor))
      attributes[:pages]&.each do |page|
        pages.create! magazine: magazine, **page
      end
    end
  end
end

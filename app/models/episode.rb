# frozen_string_literal: true
class Episode < ApplicationRecord
  belongs_to :magazine
  has_many :pages, -> { order(:no) }

  scope :sorted, lambda {
    all.sort_by { |episode| episode.page.no }
  }

  def page
    pages.first
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

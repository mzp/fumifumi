# frozen_string_literal: true
class Episode < ApplicationRecord
  belongs_to :magazine
  belongs_to :page
  scope :sorted, -> { includes(:page).order('pages.no') }

  def pages
    @pages ||= magazine.episode_pages.find do |pages|
      pages.first.episode == self
    end
  end
end

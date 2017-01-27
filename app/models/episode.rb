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
end

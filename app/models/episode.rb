# frozen_string_literal: true
class Episode < ApplicationRecord
  belongs_to :magazine
  belongs_to :page
  scope :sorted, -> { includes(:page).order('pages.no') }
end

# frozen_string_literal: true
class Episode < ApplicationRecord
  belongs_to :magazine
  belongs_to :page
end

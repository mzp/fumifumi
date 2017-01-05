# frozen_string_literal: true
class Magazine < ApplicationRecord
  has_many :pages, -> { order(:no) }

  def cover
    pages.first
  end
end

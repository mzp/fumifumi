# frozen_string_literal: true
class Magazine < ApplicationRecord
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
end

# frozen_string_literal: true
class Page < ApplicationRecord
  belongs_to :magazine
  belongs_to :episode, required: false

  has_attached_file :content, styles: { thumbnail: '200x200>' }
  validates_attachment :content,
                       presence: true,
                       content_type: { content_type: %r{\Aimage/.*\z} }

  delegate :url, to: :content

  def episode_cover?
    episode.page == self
  end
end

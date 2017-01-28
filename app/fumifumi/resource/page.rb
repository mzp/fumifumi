# frozen_string_literal: true
module Resource
  class Page < Base
    field :image_url, proc: -> { page_path(model) }
    field :thumbnail_url, proc: -> { page_path(model, thumbnail: true) }
  end
end

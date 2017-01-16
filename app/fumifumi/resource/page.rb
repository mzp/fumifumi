# frozen_string_literal: true
module Resource
  class Page < Base
    field :image_url, proc: -> { page_path(model) }
  end
end

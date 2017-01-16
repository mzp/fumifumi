# frozen_string_literal: true
module Resource
  class Episode < Base
    field :page, with: Resource::Page
    field :url, proc: -> { episode_path(model) }
  end
end

# frozen_string_literal: true
module Resource
  class Magazine < Base
    field :cover, with: Resource::Page
    field :url, proc: -> { "/episodes/magazine/#{model.id}" }
    array_field :episodes, with: Resource::Episode
  end
end

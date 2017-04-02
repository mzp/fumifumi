# frozen_string_literal: true

module Resource
  class MagazineOverview < Base
    field :cover, with: Resource::Page
    field :url, proc: -> { magazine_path(model) }
  end
end

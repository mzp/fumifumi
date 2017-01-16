# frozen_string_literal: true
module Resource
  class Magazine < Base
    field :cover, with: Resource::Page
    array_field :episodes, with: Resource::Episode
  end
end

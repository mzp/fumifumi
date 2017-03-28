# frozen_string_literal: true

module Resource
  class Magazine < MagazineOverview
    array_field :episodes, with: Resource::Episode
    field :next, with: Resource::MagazineOverview
    field :prev, with: Resource::MagazineOverview
  end
end

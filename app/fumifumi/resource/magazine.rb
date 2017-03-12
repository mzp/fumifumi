# frozen_string_literal: true
module Resource
  class Magazine < MagazineOverview
    array_field :episodes, with: Resource::Episode
  end
end

# frozen_string_literal: true

module Resource
  class EpisodeDetail < ::Resource::Episode
    field :magazine_title, proc: -> { model.magazine.title }
    field :magazine_url, proc: -> { "/episodes/magazine/#{model.magazine.id}" }
    field :next, with: Resource::Episode
    field :prev, with: Resource::Episode
  end
end

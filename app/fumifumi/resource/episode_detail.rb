# frozen_string_literal: true

module Resource
  class EpisodeDetail < ::Resource::Episode
    field :magazine_title, proc: -> { model.magazine.title }
    field :magazine_url, proc: -> { magazine_path(model.magazine) }
    field :next, with: Resource::Episode
    field :prev, with: Resource::Episode
  end
end

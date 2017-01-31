# frozen_string_literal: true
module Resource
  class EpisodeDetail < ::Resource::Episode
    field :magazine_title, proc: -> { model.magazine.title }
  end
end

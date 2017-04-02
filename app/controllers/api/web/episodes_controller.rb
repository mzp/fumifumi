# frozen_string_literal: true

module Api
  module Web
    class EpisodesController < ApiController
      def show
        episode = Episode.find(params[:id])
        render json: Resource::EpisodeDetail.new(episode)
      end
    end
  end
end

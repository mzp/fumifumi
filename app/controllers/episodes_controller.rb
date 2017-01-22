# frozen_string_literal: true
class EpisodesController < ApplicationController
  def show
    episode = Episode.find(params[:id])
    render json: Resource::Episode.new(episode)
  end
end

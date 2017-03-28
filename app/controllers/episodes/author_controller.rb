# frozen_string_literal: true

module Episodes
  class AuthorController < ApplicationController
    def index
      author = params[:name]
      render json: Episode.where(author: author).map { |e|
        Resource::Episode.new(e)
      }
    end
  end
end

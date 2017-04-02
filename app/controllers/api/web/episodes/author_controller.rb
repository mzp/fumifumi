# frozen_string_literal: true

module Api
  module Web
    module Episodes
      class AuthorController < ApiController
        def index
          author = params[:name]
          render json: Episode.where(author: author).map { |e|
            Resource::Episode.new(e)
          }
        end
      end
    end
  end
end

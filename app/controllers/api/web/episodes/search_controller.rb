# frozen_string_literal: true

module Api
  module Web
    module Episodes
      class SearchController < ApplicationController
        def index
          render json: ::Episode.search(params[:query]).records.to_a.map(&Resource::Episode.method(:new))
        end
      end
    end
  end
end

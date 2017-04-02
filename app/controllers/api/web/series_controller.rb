# frozen_string_literal: true

module Api
  module Web
    class SeriesController < ApiController
      def index
        render json: Series.all.includes(magazines: [:pages]).map(&Resource::Series.method(:new))
      end
    end
  end
end

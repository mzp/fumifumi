# frozen_string_literal: true
module Api
  module Agent
    module Magazines
      class ExistsController < ApiController
        def index
          render json: Magazine.exists?(original_filename: params[:filename])
        end
      end
    end
  end
end

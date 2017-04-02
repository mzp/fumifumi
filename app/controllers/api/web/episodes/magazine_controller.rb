# frozen_string_literal: true

module Api
  module Web
    module Episodes
      class MagazineController < ApplicationController
        def show
          magazine = Magazine.find(params[:id])
          render json: Resource::Magazine.new(magazine)
        end
      end
    end
  end
end

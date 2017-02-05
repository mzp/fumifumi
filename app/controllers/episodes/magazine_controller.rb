# frozen_string_literal: true
module Episodes
  class MagazineController < ApplicationController
    def show
      id = params[:id]
      render json: Magazine.find(id).episodes.map { |e|
        Resource::Episode.new(e)
      }
    end
  end
end

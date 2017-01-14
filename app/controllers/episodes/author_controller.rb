# frozen_string_literal: true
module Episodes
  class AuthorController < ApplicationController
    def index
      @author = params[:name]
      @episodes = Episode.where(author: @author)
    end
  end
end

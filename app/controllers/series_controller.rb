# frozen_string_literal: true

class SeriesController < ApplicationController
  def index
    render json: Series.all.map(&Resource::Series.method(:new))
  end
end

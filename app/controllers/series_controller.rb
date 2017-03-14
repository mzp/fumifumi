# frozen_string_literal: true

class SeriesController < ApplicationController
  def index
    render json: Series.all.includes(magazines: [:pages]).map(&Resource::Series.method(:new))
  end
end

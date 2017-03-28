# frozen_string_literal: true

module Magazines
  class DashboardController < ApplicationController
    def index
      @magazines = ::Magazine.all
    end

    def destroy
      @magazine = ::Magazine.find(params[:id])
      @magazine.destroy!
      redirect_to :magazines_dashboard_index
    end
  end
end

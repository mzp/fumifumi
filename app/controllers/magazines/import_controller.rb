# frozen_string_literal: true

module Magazines
  class ImportController < ApplicationController
    def create
      ImportAllMagazineJob.perform_later
      redirect_to :magazines
    end

    def update
      magazine = Magazine.find(params[:id])
      ImportMagazineJob.perform_later magazine
      redirect_to :magazines
    end
  end
end

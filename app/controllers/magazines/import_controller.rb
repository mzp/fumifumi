# frozen_string_literal: true

module Magazines
  class ImportController < ApplicationController
    def update
      magazine = Magazine.find(params[:id])
      ImportMagazineJob.perform_later magazine
      redirect_to :magazines
    end
  end
end

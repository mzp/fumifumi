# frozen_string_literal: true
module Api
  module Agent
    class MagazinesController < ApiController
      def create
        magazine = ::Magazine.create!(
          title: params[:file].original_filename,
          source: params[:file].tempfile
        )
        ::ImportMagazineJob.perform_later magazine
        render json: 'ok'.to_json
      end
    end
  end
end

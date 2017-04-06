# frozen_string_literal: true

module Api
  module Web
    class MagazinesController < ApiController
      include Rails::Pagination

      def index
        magazines = paginate Magazine.finished.recent.where(series: params[:series_id]).includes(:pages)

        render json: magazines.map(&Resource::MagazineOverview.method(:new))
      end

      def create
        Fumifumi::Magazine::Upload
          .new(params[:attachment])
          .on(:invalid) { |e| return render_error(e) }
          .call
        render json: 'ok'.to_json
      end

      def show
        magazine = Magazine.find(params[:id])
        render json: Resource::Magazine.new(magazine)
      end

      private

      def render_error(e)
        Rails.logger.error e
        Rails.logger.error e.backtrace
        render json: e.message.to_json, status: :bad_request
      end

      def paginate(*args)
        super.tap do |collection|
          has_more = !(collection.last_page? || collection.out_of_range?)
          headers['HasMore'] = has_more.to_s
        end
      end
    end
  end
end

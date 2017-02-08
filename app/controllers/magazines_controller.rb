# frozen_string_literal: true
class MagazinesController < ApiController
  include Rails::Pagination

  def index
    magazines = paginate Magazine.finished, per_page: 3

    render json: magazines.map(&Resource::Magazine.method(:new))
  end

  def create
    magazine = ::Magazine.create!(
      title: params[:attachment].original_filename,
      source: params[:attachment].tempfile
    )
    ::ImportMagazineJob.perform_later magazine
    render json: 'ok'.to_json
  rescue ActiveRecord::RecordInvalid => e
    render_error(e)
  end

  private

  def render_error(e)
    Rails.logger.error e
    Rails.logger.error e.backtrace
    render json: e.message.to_json, status: :bad_request
  end
end

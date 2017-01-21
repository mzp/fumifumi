# frozen_string_literal: true
class MagazinesController < ApplicationController
  def index
    render json: Magazine.finished.map(&Resource::Magazine.method(:new))
  end

  def new; end

  def show
    @magazine = ::Magazine.find(params[:id])
  end

  def create
    magazine = ::Magazine.create!(
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

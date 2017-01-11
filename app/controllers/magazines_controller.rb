# frozen_string_literal: true
class MagazinesController < ApplicationController
  def index
    @magazines = ::Magazine.all
  end

  def new; end

  def show
    @magazine = ::Magazine.find(params[:id])
  end

  def create
    magazine = ::Magazine.create!(
      title: '<WIP>',
      source: params[:attachment].tempfile
    )
    ::ImportMagazineJob.perform_later magazine
    render json: 'ok'.to_json
  rescue ActiveRecord::RecordInvalid => e
    render json: e.message.to_json, status: :bad_request
  end

  def destroy
    @magazine = ::Magazine.find(params[:id])
    @magazine.destroy!
    redirect_to :magazines
  end
end

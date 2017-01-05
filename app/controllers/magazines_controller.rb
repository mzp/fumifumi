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
    magazine = ::Magazine.create(
      title: '<WIP>',
      source: params[:magazine][:attachment].tempfile
    )
    ::ImportMagazineJob.perform_later magazine
    redirect_to :magazines
  end
end

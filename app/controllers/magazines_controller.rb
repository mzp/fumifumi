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
    ::Fumifumi::Magazine::Import
      .new(params[:magazine][:attachment].tempfile)
      .call
    redirect_to :magazines
  end
end

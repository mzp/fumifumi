# frozen_string_literal: true
class PagesController < ApplicationController
  def show
    page = Page.find(params[:id])
    send_data Paperclip.io_adapters.for(page.content).read,
              type: page.content_content_type
  end
end

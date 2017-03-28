# frozen_string_literal: true

class PagesController < ApplicationController
  def show
    page = Page.find(params[:id])

    io = if params[:thumbnail]
           page.content.styles[:thumbnail]
         else
           page.content
         end
    send_data Paperclip.io_adapters.for(io).read,
              type: page.content_content_type
  end
end

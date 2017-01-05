# frozen_string_literal: true
Rails.application.routes.draw do
  get '/' => 'welcome#index'
  resources :magazines, only: %i(index new create show)
end

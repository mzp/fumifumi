# frozen_string_literal: true
require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => 'welcome#index'
  resources :magazines, only: %i(index new create show)

  mount Sidekiq::Web => '/sidekiq'
end

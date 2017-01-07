# frozen_string_literal: true
require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => 'welcome#index'

  resources :episodes, only: %i(show)

  resources :magazines, only: %i(index new create show destroy)
  namespace :magazines do
    resources :import, only: %i(update)
  end

  mount Sidekiq::Web => '/sidekiq'
end

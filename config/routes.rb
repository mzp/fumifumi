# frozen_string_literal: true
require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => redirect('/magazines')
  get '/admin' => 'admin#index'

  resources :episodes, only: %i(show), constraints: { id: /\d+/ }
  namespace :episodes do
    resources :author, only: %i(index)
  end

  resources :magazines, only: %i(index new create show destroy)
  namespace :magazines do
    resources :import, only: %i(create update)
  end

  resources :pages, only: %i(show)

  mount Sidekiq::Web => '/sidekiq'
end

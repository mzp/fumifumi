# frozen_string_literal: true
require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => redirect('/magazines')
  get '/admin' => 'admin#index'

  resources :episodes, only: %i(show), constraints: { id: /\d+/ }
  namespace :episodes do
    resources :author, only: %i(index)
  end

  resources :magazines, only: %i(new create show destroy)
  namespace :magazines do
    resources :import, only: %i(create update)
  end

  scope :api do
    resources :magazines, only: %i(index)
  end

  resources :pages, only: %i(show)

  %w(/magazines).each do |path|
    get path => 'react#mount_page'
  end

  mount Sidekiq::Web => '/sidekiq'
end

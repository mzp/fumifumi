# frozen_string_literal: true
require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => redirect('/magazines')

  namespace :episodes do
    resources :author, only: %i(index)
  end

  resources :magazines, only: %i(create show), constraints: { id: /\d+/ }
  namespace :magazines do
    resources :dashboard, only: %i(index destroy)
    resources :import, only: %i(create update)
  end

  scope :api do
    resources :magazines, only: %i(index)
    resources :episodes, only: %i(show)
  end

  resources :pages, only: %i(show)

  %w(/magazines /magazines/new).each do |path|
    get path => 'react#mount_page'
  end

  mount Sidekiq::Web => '/sidekiq'
end

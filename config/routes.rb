# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => redirect('/series')

  namespace :magazines do
    resources :dashboard, only: %i(index destroy)
    resources :import, only: %i(create update)
  end

  namespace :api do
    namespace :web do
      resources :series, only: %i(index)
      resources :magazines, only: %i(create index show), constraints: { id: /\d+/ }
      resources :episodes, only: %i(show), constraints: { id: /\d+/ }
      namespace :episodes do
        resources :author, only: %i(index)
      end
    end
  end

  namespace :api do
    namespace :agent do
      resources :magazines, only: %i(create)
      namespace :magazines do
        resources :exists, only: %i(index)
      end
    end
  end

  resources :pages, only: %i(show)

  %w(/series /magazines /magazines/new /episodes/magazine/:id /episodes/:id).each do |path|
    get path => 'react#mount_page'
  end

  mount Sidekiq::Web => '/sidekiq'
end

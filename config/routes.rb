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
        resources :search, only: %i(index)
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

  [
    %w(/series series),
    %w(/magazines magazines),
    %w(/magazines/new magazines_new),
    %w(/magazines/:id magazine),
    %w(/episodes/author episodes_author),
    %w(/episodes/:id episode)
  ].each do |path, name|
    get path => 'react#mount_page', as: name
  end

  mount Sidekiq::Web => '/sidekiq'
end

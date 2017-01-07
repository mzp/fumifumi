source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.0.1'

gem 'gepub'
gem 'haml-rails'
gem 'jbuilder'
gem 'mysql2'
gem 'paperclip'
gem 'puma'
gem 'sidekiq'

group :development, :test do
  gem 'byebug'
  gem 'pry'
  gem 'listen'
end

group :development do
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'web-console'
end

group :test do
  gem 'factory_girl_rails'
  gem 'haml_lint'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'rubocop'
end

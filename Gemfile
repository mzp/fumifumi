source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.0.1'

gem 'api-pagination'
gem 'gepub'
gem 'haml-rails'
gem 'jbuilder'
gem 'kaminari'
gem 'mysql2'
# close+unlink leaking tempfiles
# https://github.com/thoughtbot/paperclip/pull/2143
gem 'paperclip', github: 'erkki/paperclip', branch: 'unlink_tempfiles'
gem 'puma'
gem 'sidekiq'
gem 'wisper'

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
  gem 'database_rewinder'
  gem 'factory_girl_rails'
  gem 'haml_lint'
  gem 'json_spec'
  # I need https://github.com/brynary/rack-test/pull/129,
  # to save extensiton for paper clip content type validation.
  gem 'rack-test', github: 'brynary/rack-test'
  gem 'rails-controller-testing'
  gem 'rspec-benchmark'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'wisper-rspec'
end

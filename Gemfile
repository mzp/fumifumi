source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.0.1'

gem 'coffee-rails'
gem 'jbuilder'
gem 'jquery-rails'
gem 'mysql2'
gem 'puma'
gem 'sass-rails'
gem 'turbolinks'
gem 'uglifier'

group :development, :test do
  gem 'byebug'
end

group :development do
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'web-console'
end

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.5'

gem 'rails', '~> 5.2', '>= 5.2.3'

gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'sassc-rails', '~> 2.1', '>= 2.1.1'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.0', '>= 4.0.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# used for upgrading graphql
gem 'schema'

# Project Specific Gems:
gem 'haml'
gem 'devise', '~> 4.5'
gem 'graphql'
gem 'porch'
gem 'chronic', '~> 0.10.2'
gem 'acts_as_list', '~> 0.9.19'

group :development, :test do
  gem 'dotenv-rails'
  gem 'pry'
end

group :development do
  gem 'better_errors', '~> 2.1', '>= 2.1.1'
  gem 'binding_of_caller'
  # query interface for graphql
  gem "graphiql-rails"
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'rspec-rails', '~> 3.8', '>= 3.8.2'
  gem 'rails-controller-testing'
  gem 'factory_bot_rails', '~> 5.0', '>= 5.0.2'
end

source 'https://rubygems.org'

ruby '2.2.2'

source "https://rails-assets.org" do
  gem "rails-assets-angular-devise"
end
gem 'devise', '~> 3.5.0'
gem 'angular_rails_csrf'
gem 'responders'
gem 'angular-rails-templates'
gem 'sprockets', '2.12.3'
gem 'rails', '4.2.4'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'bower'

group :development, :test do
  gem 'sqlite3'
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

group :production do
  gem 'rails_12factor'
  gem 'puma'
  gem 'pg'
end

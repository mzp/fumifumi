# frozen_string_literal: true
require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'action_cable/engine'
require 'sprockets/railtie'
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

require_relative '../lib/monkey_patches/rack_multipart_buffer'

module Fumifumi
  class Application < Rails::Application
    config.active_job.queue_adapter = :sidekiq
    config.middleware.insert_before Rack::Runtime, ::RackMultipartBuffer
    config.middleware.use Rack::TempfileReaper

    Paperclip::Attachment.default_options[:path] =
      Pathname(ENV['FUMIFUMI_STORAGE_ROOT'] || '/tmp')
      .join(':rails_env/:class/:attachment/:style/:id_partition/:filename')
      .to_s
  end
end

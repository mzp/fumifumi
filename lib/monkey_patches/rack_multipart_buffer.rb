# frozen_string_literal: true

# https://github.com/rack/rack/issues/1075
class RackMultipartBuffer
  def initialize(app)
    @app = app
  end

  def call(env)
    env[Rack::RACK_MULTIPART_BUFFER_SIZE] = 100 * 1024 * 1024
    @app.call(env)
  end
end

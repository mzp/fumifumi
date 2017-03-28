# frozen_string_literal: true

module Resource
  class Base
    include Rails.application.routes.url_helpers
    include Resource::DSL

    def initialize(model)
      @model = model
    end

    def as_json(*args)
      dsl(model.as_json(*args))
    end

    private

    attr_reader :model
  end
end

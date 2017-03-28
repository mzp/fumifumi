# frozen_string_literal: true

module Resource
  class Episode < Base
    field :page, with: Resource::Page
    field :url, proc: -> { "/episodes/#{model.id}" }
    field :author_url, proc: -> { "/episodes/author?name=#{URI.encode(model.author.to_s)}" }
    array_field :pages, with: Resource::Page
  end
end

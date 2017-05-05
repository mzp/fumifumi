# frozen_string_literal: true

module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    index_name { "#{name.underscore}_#{Rails.env}" }
  end

  class_methods do
    def fields_ja(names)
      ja = {
        index_analyzer: 'ngram_ja', search_analyzer: 'simple_keyword', fields: {
          raw: { type: 'string', index: 'not_analyzed' },
          kana: { type: 'string', index_analyzer: 'kana', search_analyzer: 'simple_keyword' },
          single: { type: 'string', analyzer: 'ngram_single' }
        }
      }

      mapping { names.each { |name| indexes name, ja } }
    end
  end
end

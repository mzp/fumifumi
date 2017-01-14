# frozen_string_literal: true
module Fumifumi
  module Episode
    class Info
      REGEXP = /\A(?<author>.*)「(?<title>.*)」\z/

      def initialize(source)
        @source = source
      end

      def call
        return default unless source =~ REGEXP

        {
          author: Regexp.last_match['author'],
          title: Regexp.last_match['title']
        }
      end

      private

      attr_reader :source

      def default
        {
          author: nil,
          title: source
        }
      end
    end
  end
end

# frozen_string_literal: true

module Fumifumi
  module Parser
    class Episode
      REGEXP = Regexp.union(
        /\A(?<author>.*)「(?<title>.*)」\z/,
        /\A(?<author>.*)\((?<title>.*)\)\z/
      )

      def initialize(source)
        @source = source
      end

      def call
        return default unless source =~ REGEXP

        {
          author: Regexp.last_match['author'].strip,
          title: Regexp.last_match['title'].strip
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

# frozen_string_literal: true

module Fumifumi
  module Parser
    class Epub
      def initialize(path)
        @path = path
      end

      def call
        page_map = build_page_map
        episodes = episodes(page_map)

        cover = { pages: [] }
        split!(cover, episodes, page_map.values)

        Hashie::Mash.new(title: book.title.to_s, cover: cover[:pages], episodes: episodes)
      end

      private

      attr_reader :path

      def book
        @book ||= Book.new(path)
      end

      def build_page_map
        build({}) do |pages|
          book.each_page do |item, content, no|
            pages[item.href] = { no: no, content: content }
          end
        end
      end

      def episode(title)
        Fumifumi::Parser::Episode.new(title).call
      end

      def episodes(page_map)
        build([]) do |episodes|
          book.each_nav do |title, ref|
            episodes << episode(title).merge(anchor: page_map[ref], pages: [])
          end
        end
      end

      def split!(cover, episodes, pages)
        pages.reduce(cover) do |episode, page|
          e = episodes.find(-> { episode }) { |item| item[:anchor] == page }
          e.tap do
            e[:pages] << page
          end
        end
      end

      def build(value)
        yield value
        value
      end
    end
  end
end

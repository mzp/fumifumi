# frozen_string_literal: true
module Fumifumi
  module Magazine
    class Import
      def initialize(magazine)
        @magazine = magazine
      end

      def call
        ApplicationRecord.transaction do
          magazine.tap do |magazine|
            magazine.update! title: book.title
            each_content do |content, no|
              magazine.pages.create no: no, content: content
            end
          end
        end
      end

      private

      attr_reader :magazine

      def book
        @book ||=
          begin
            tempfile do |temp|
              magazine.source.copy_to_local_file(:original, temp.path)
              GEPUB::Book.parse(temp.path)
            end
          end
      end

      def items
        @items ||= book.manifest.item_list
      end

      def pages
        @pages ||= book.spine.itemref_list.map { |ref| ref['idref'] }
      end

      # extract image from page
      def extract(text)
        html = Nokogiri::HTML(text)

        html.css('image').first&.[]('xlink:href') ||
          html.css('img').first&.[]('src')
      end

      def find(href)
        items.values.find { |item| item.href == href }
      end

      def each_content
        pages.each.with_index do |page, index|
          href = extract(items[page].content)
          content = find(href)&.content
          next unless content

          tempfile do |temp|
            temp.write content
            yield temp, index
          end
        end
      end

      def tempfile
        Tempfile.create(encoding: Encoding::ASCII_8BIT, &Proc.new)
      end
    end
  end
end

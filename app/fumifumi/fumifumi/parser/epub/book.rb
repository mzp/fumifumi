# frozen_string_literal: true

module Fumifumi
  module Parser
    class Epub
      class Book
        delegate :title, to: :book

        def initialize(path)
          @book = GEPUB::Book.parse(path)
        end

        def each_page
          pages.each.with_index do |page, index|
            item = image_item(items[page])
            next unless item

            tempfile do |temp|
              temp.write item.content
              yield items[page], temp, index
            end
          end
        end

        def each_nav
          html = Nokogiri::HTML(items['ncx'].content)
          html.css('navpoint').each do |e|
            yield e.css('text').text, e.css('content').attribute('src').value
          end
        end

        private

        attr_reader :book

        def pages
          @pages ||= book.spine.itemref_list.map { |ref| ref['idref'] }
        end

        def items
          @items ||= book.manifest.item_list
        end

        def image_link(text)
          html = Nokogiri::HTML(text)

          html.css('image').first&.[]('xlink:href') ||
            html.css('img').first&.[]('src')
        end

        def find_by_path(path)
          items.values.find { |item| item.href == path }
        end

        def image_item(item)
          relative_path = image_link(item.content)
          return nil unless relative_path.present?

          path = Pathname(item.href).join('..', relative_path).to_s
          find_by_path(path)
        end

        def tempfile
          yield Tempfile.new(encoding: Encoding::ASCII_8BIT)
        end
      end
    end
  end
end

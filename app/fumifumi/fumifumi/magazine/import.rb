# frozen_string_literal: true
module Fumifumi
  module Magazine
    class Import
      def initialize(magazine)
        @magazine = magazine
      end

      def call
        update_magazine do |magazine|
          magazine.import!(book)
        end
      end

      private

      attr_reader :magazine

      def book
        @book ||=
          begin
            tempfile do |temp|
              magazine.source.copy_to_local_file(:original, temp.path)
              Fumifumi::Parser::Epub.new(temp.path).call
            end
          end
      end

      def update_magazine
        ApplicationRecord.transaction do
          magazine.reset!
          magazine.tap(&Proc.new).reload
        end
      end

      def tempfile
        Tempfile.create(encoding: Encoding::ASCII_8BIT, &Proc.new)
      end
    end
  end
end

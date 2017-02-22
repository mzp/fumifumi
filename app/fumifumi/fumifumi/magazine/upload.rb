# frozen_string_literal: true
module Fumifumi
  module Magazine
    class Upload
      include Wisper::Publisher

      def initialize(file)
        @file = file
      end

      def call
        magazine = ::Magazine.create!(attributes)
        ImportMagazineJob.perform_later magazine
      rescue ActiveRecord::RecordInvalid => e
        broadcast :invalid, e
      end

      private

      attr_reader :file

      def attributes
        {
          title: file.original_filename,
          source: file.tempfile
        }
      end
    end
  end
end

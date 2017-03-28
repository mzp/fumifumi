# frozen_string_literal: true

class ImportMagazineJob < ApplicationJob
  def perform(magazine)
    ::Fumifumi::Magazine::Import.new(magazine).call
  end
end

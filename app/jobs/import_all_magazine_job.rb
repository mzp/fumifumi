# frozen_string_literal: true
class ImportAllMagazineJob < ApplicationJob
  def perform
    Magazine.all.each do |magazine|
      ::Fumifumi::Magazine::Import.new(magazine).call
    end
  end
end

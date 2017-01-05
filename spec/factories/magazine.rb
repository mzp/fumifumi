# frozen_string_literal: true
FactoryGirl.define do
  factory :magazine do
    title 'The Magazine'
    source { Rails.root.join('spec/fixtures/files/saint_oniisan.epub').open }
  end
end

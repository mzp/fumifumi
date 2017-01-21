# frozen_string_literal: true
FactoryGirl.define do
  factory :magazine do
    title 'The Magazine'
    source { Rails.root.join('spec/fixtures/files/saint_oniisan.epub').open }
    finished_at Time.current

    factory :wip_magazine do
      finished_at nil
    end
  end
end

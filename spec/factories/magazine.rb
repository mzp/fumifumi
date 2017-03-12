# frozen_string_literal: true
FactoryGirl.define do
  factory :magazine do
    sequence :title { |n| format('The Magazine %03d', n) }
    source { Rails.root.join('spec/fixtures/files/saint_oniisan.epub').open }
    finished_at Time.current
    original_filename 'saint_oniisan.epub'

    factory :wip_magazine do
      finished_at nil
    end
  end
end

# frozen_string_literal: true
FactoryGirl.define do
  factory :series do
    sequence :title { |n| "Series #{n}" }
  end
end

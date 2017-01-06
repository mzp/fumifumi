# frozen_string_literal: true
FactoryGirl.define do
  factory :episode do
    sequence :title { |n| "Episode #{n}" }
  end
end

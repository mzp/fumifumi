# frozen_string_literal: true

RSpec.describe Api::Web::MagazinesController, type: :controller, bench: true do
  before do
    ApplicationRecord.transaction do
      3.times do
        magazine = create_force(:magazine, source: nil)
        episode = create_list(:episode, 60, magazine: magazine)
        0.upto(300) do |i|
          create_force(:page, magazine: magazine, episode: episode[i % 5], content: nil)
        end
      end
    end
  end

  it do
    expect { get :index }.to perform_under(1500).ms.and_sample(3)
  end
end

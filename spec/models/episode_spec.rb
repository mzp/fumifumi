# frozen_string_literal: true
RSpec.describe Episode do
  describe '#import!' do
    let(:magazine) { create(:magazine) }
    let(:episode) { create(:episode, magazine: magazine) }
    let(:input) do
      attributes_for(
        :episode,
        pages: [attributes_for(:page), attributes_for(:page)]
      )
    end

    before { episode.import! Hashie::Mash.new(input) }
    subject { episode.reload }
    it do
      expect(subject.title).to eq(input[:title])
      expect(subject.author).to eq(input[:author])
      expect(subject.pages.size).to eq(2)
#      expect(subject.episodes.size).to eq(2)
    end
  end
end

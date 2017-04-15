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
    end
  end

  describe 'navigation' do
    let(:magazine) { create(:magazine) }
    let!(:prev_prev) { create(:episode, magazine: magazine) }
    let!(:prev) { create(:episode, magazine: magazine) }
    let!(:current) { create(:episode, magazine: magazine) }
    let!(:next_) { create(:episode, magazine: magazine) }
    let!(:next_next) { create(:episode, magazine: magazine) }

    before do
      [
        prev_prev,
        prev,
        current,
        next_,
        next_next
      ].each do |episode|
        create_list(:page, 2, episode: episode, magazine: magazine)
      end
    end

    describe '#next' do
      subject { current.next }
      it { expect(subject).to eq(next_) }
      it { expect(subject.next).to eq(next_next) }
      it { expect(subject.next.next).to be_nil }
    end

    describe '#prev' do
      subject { current.prev }
      it { expect(subject).to eq(prev) }
      it { expect(subject.prev).to eq(prev_prev) }
      it { expect(subject.prev.prev).to be_nil }
    end
  end

  describe 'search', elasticsearch: true do
    let(:magazine) { create(:magazine) }
    let!(:foo) { create(:episode, title: 'foo', magazine: magazine) }
    let!(:bar) { create(:episode, title: 'bar', magazine: magazine) }
    subject { described_class.search('*').records.to_a }
    it do
      sleep 1 # waiw for indexed
      aggregate_failures do
        expect(subject).to include(foo)
        expect(subject).to include(bar)
      end
    end
  end
end

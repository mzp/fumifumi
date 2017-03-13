# frozen_string_literal: true

RSpec.describe Magazine, type: :model do
  describe 'finished_at' do
    let!(:magazine) { create(:magazine) }
    let!(:wip_magazine) { create(:wip_magazine) }
    describe '.finished' do
      subject { described_class.finished }
      it do
        expect(subject).to include(magazine)
        expect(subject).to_not include(wip_magazine)
      end
    end
  end

  describe '#pages' do
    let(:cover) do
      build(:page, no: 1)
    end

    subject do
      create(:magazine).tap do |magazine|
        magazine.pages << build(:page, no: 3)
        magazine.pages << cover
        magazine.pages << build(:page, no: 2)
      end
    end

    it do
      expect(subject).to be_persisted
      expect(subject.pages.map(&:no)).to eq([1, 2, 3])
      expect(subject.cover).to eq(cover)
    end
  end

  describe '#reset!' do
    let(:magazine) { create(:magazine) }
    let!(:pages) { create_list(:page, 3, magazine: magazine) }
    let!(:episodes) { create_list(:episode, 2, magazine: magazine) }

    subject { magazine }
    before { magazine.reset! }
    it do
      expect(subject.pages).to be_empty
      expect(subject.episodes).to be_empty
    end
  end

  describe '#import!' do
    let(:magazine) { create(:magazine) }
    let(:book) do
      attributes_for(
        :magazine,
        cover: [
          attributes_for(:page),
          attributes_for(:page)
        ],
        episodes: [
          attributes_for(:episode, pages: [attributes_for(:page)]),
          attributes_for(:episode)
        ]
      )
    end
    before { magazine.import! Hashie::Mash.new(book) }
    subject { magazine.reload }
    it do
      expect(subject.title).to eq(book[:title])
      expect(subject.finished_at).to be_present
      expect(subject.pages.size).to eq(3)
      expect(subject.episodes.size).to eq(2)
    end
  end

  describe 'navigation' do
    let(:series) { create(:series) }
    let!(:prev_prev) { create(:magazine, series: series, original_filename: '1.epub') }
    let!(:prev) { create(:magazine, series: series, original_filename: '2.epub') }
    let!(:current) { create(:magazine, series: series, original_filename: '3.epub') }
    let!(:next_) { create(:magazine, series: series, original_filename: '4.epub') }
    let!(:next_next) { create(:magazine, series: series, original_filename: '5.epub') }

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
end

# frozen_string_literal: true

RSpec.describe Magazine, type: :model do
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

  describe '#episodes' do
    let(:magazine) { create(:magazine) }
    let!(:page2) { create(:page, no: 2, magazine: magazine) }
    let!(:page1) { create(:page, no: 1, magazine: magazine) }
    let!(:episode2) { create(:episode, page: page2, magazine: magazine) }
    let!(:episode1) { create(:episode, page: page1, magazine: magazine) }

    subject { magazine.episodes }
    it { expect(subject).to eq([episode1, episode2]) }
  end
end

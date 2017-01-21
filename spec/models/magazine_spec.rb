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

  describe '#reset!' do
    let(:magazine) { create(:magazine) }
    let!(:pages) { create_list(:page, 3, magazine: magazine) }
    let!(:episodes) { create_list(:episode, 2, page: pages.first, magazine: magazine) }

    subject { magazine }
    before { magazine.reset! }
    it do
      expect(subject.pages).to be_empty
      expect(subject.episodes).to be_empty
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
end

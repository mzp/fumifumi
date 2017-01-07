# frozen_string_literal: true
RSpec.describe Episode do
  describe '#pages' do
    let(:magazine) { create(:magazine) }
    let(:pages) { create_list(:page, 10, magazine: magazine) }
    let!(:episode1) { create(:episode, page: pages[1], magazine: magazine) }
    let!(:episode2) { create(:episode, page: pages[5], magazine: magazine) }
    let!(:episode3) { create(:episode, page: pages[7], magazine: magazine) }

    describe 'first episode' do
      subject { episode1.pages }
      it { expect(subject).to eq(pages[1..4]) }
    end

    describe 'middle episode' do
      subject { episode2.pages }
      it { expect(subject).to eq(pages[5..6]) }
    end

    describe 'last episode' do
      subject { episode3.pages }
      it { expect(subject).to eq(pages[7..-1]) }
    end
  end

  describe 'sorted scope' do
    let(:magazine) { create(:magazine) }
    let!(:page2) { create(:page, no: 2, magazine: magazine) }
    let!(:page1) { create(:page, no: 1, magazine: magazine) }
    let!(:episode2) { create(:episode, page: page2, magazine: magazine) }
    let!(:episode1) { create(:episode, page: page1, magazine: magazine) }

    subject { magazine.episodes.sorted }
    it { expect(subject).to eq([episode1, episode2]) }
  end
end

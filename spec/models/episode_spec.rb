# frozen_string_literal: true
RSpec.describe Episode do
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

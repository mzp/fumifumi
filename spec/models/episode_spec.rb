# frozen_string_literal: true
RSpec.describe Episode do
  describe 'sorted scope' do
    let(:magazine) { create(:magazine) }
    let!(:page2) { create(:page, no: 2, magazine: magazine) }
    let!(:page1) { create(:page, no: 1, magazine: magazine) }
    let!(:episode2) { build(:episode) }
    let!(:episode1) { build(:episode) }

    before do
      magazine.create_toc!(page1 => episode2,
                           page2 => episode1)
    end

    subject { magazine.episodes.sorted }
    it { expect(subject).to eq([episode2, episode1]) }
  end
end

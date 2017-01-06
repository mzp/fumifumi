# frozen_string_literal: true

RSpec.describe Page, type: :model do
  describe '#content' do
    let(:file) { file_fixture('image.png').open }
    subject { described_class.create no: 1, content: file, magazine: build(:magazine) }
    it do
      expect(subject).to be_persisted
      expect(subject.url).to start_with('/system/pages')
    end
  end

  describe '#episode_cover?' do
    let(:magazine) { create(:magazine) }
    let(:page) { create(:page, magazine: magazine) }
    let(:cover_page) { create(:page, episode: build(:episode, magazine: magazine), magazine: magazine) }
    it do
      expect(page).to_not be_episode_cover
      expect(cover_page).to be_episode_cover
    end
  end
end

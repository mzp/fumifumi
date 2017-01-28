# frozen_string_literal: true

RSpec.describe Page, type: :model do
  describe '#content' do
    let(:file) { file_fixture('image.png').open }
    subject { described_class.create no: 1, content: file, magazine: build(:magazine), episode: build(:episode) }
    it do
      expect(subject).to be_persisted
      expect(subject.url(:origial)).to start_with('/system/pages')
      expect(subject.url(:thumbnail)).to start_with('/system/pages')

      expect(subject.content.path(:origial)).to_not eq(subject.content.path(:thumbnail))
    end
  end

  describe '#episode_cover?' do
    let(:magazine) { create(:magazine) }
    let(:episode) { create(:episode, magazine: magazine) }
    let!(:cover_page) { create(:page, episode: episode, magazine: magazine) }
    let!(:page) { create(:page, episode: episode, magazine: magazine) }
    it do
      expect(page).to_not be_episode_cover
      expect(cover_page).to be_episode_cover
    end
  end
end

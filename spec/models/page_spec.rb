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
end

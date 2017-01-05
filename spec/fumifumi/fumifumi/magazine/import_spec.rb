# frozen_string_literal: true

RSpec.describe Fumifumi::Magazine::Import do
  let(:epub) { file_fixture('saint_oniisan.epub') }

  describe 'count' do
    subject { Fumifumi::Magazine::Import.new(epub).call }

    it { expect { subject }.to change(::Page, :count).by(5) }
    it { expect { subject }.to change(::Magazine, :count).by(1) }
  end

  describe 'imported magazine' do
    subject { Fumifumi::Magazine::Import.new(epub).call }

    it do
      expect(subject.title).to eq('聖☆おにいさん')
      expect(subject.pages.size).to eq(5)
      expect(subject.pages.map(&:no)).to eq((0..4).to_a)
    end
  end
end

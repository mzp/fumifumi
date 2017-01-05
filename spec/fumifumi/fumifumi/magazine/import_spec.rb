# frozen_string_literal: true

RSpec.describe Fumifumi::Magazine::Import do
  let(:magazine) { create(:magazine) }

  describe 'count' do
    subject { Fumifumi::Magazine::Import.new(magazine).call }

    it { expect { subject }.to change(::Page, :count).by(5) }
  end

  describe 'imported magazine' do
    subject { Fumifumi::Magazine::Import.new(magazine).call }

    it do
      expect(subject.title).to eq('聖☆おにいさん')
      expect(subject.pages.size).to eq(5)
      expect(subject.pages.map(&:no)).to eq((0..4).to_a)
    end
  end
end

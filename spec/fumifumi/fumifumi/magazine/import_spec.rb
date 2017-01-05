# frozen_string_literal: true

RSpec.describe Fumifumi::Magazine::Import do
  subject { Fumifumi::Magazine::Import.new(magazine).call }

  describe '#import' do
    let(:magazine) { create(:magazine) }
    it do
      expect { subject }.to change(::Page, :count).by(5)

      expect(subject.title).to eq('聖☆おにいさん')
      expect(subject.pages.size).to eq(5)
      expect(subject.pages.map(&:no)).to eq((0..4).to_a)
    end
  end

  xcontext 'real epub' do
    let(:magazine) { create(:magazine, source: Rails.root.join('sample.epub').open) }
    it { expect(subject.pages).to_not be_empty }
  end
end

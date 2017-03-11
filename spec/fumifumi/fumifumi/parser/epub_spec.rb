# frozen_string_literal: true

RSpec.describe Fumifumi::Parser::Epub do
  let(:epub) { file_fixture('saint_oniisan.epub') }
  subject { described_class.new(epub).call }

  describe '#magazine' do
    it { expect(subject.title).to eq('聖☆おにいさん') }
  end

  describe '#episodes' do
    it do
      expect(subject.episodes).to match(
        [
          a_hash_including(title: 'Page 1'),
          a_hash_including(title: 'Page 2'),
          a_hash_including(title: 'Page 3'),
          a_hash_including(title: 'Page 4')
        ]
      )
    end

    describe '#pages' do
      it do
        0.upto(3) do |i|
          expect(subject.episodes[i].pages).to match([a_hash_including(no: i + 1)])
        end
      end
    end
  end

  describe '#cover' do
    it do
      expect(subject.cover).to match([a_hash_including(no: 0)])
    end
  end
end

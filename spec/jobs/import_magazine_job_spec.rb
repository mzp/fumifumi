# frozen_string_literal: true

RSpec.describe ImportMagazineJob, type: :job do
  let(:magazine) { create(:magazine) }

  describe '#perform' do
    subject { described_class.new.perform(magazine) }
    it do
      expect { subject }.to change(::Page, :count).by 5
    end
  end
end

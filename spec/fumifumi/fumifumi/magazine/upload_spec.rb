# frozen_string_literal: true

RSpec.describe Fumifumi::Magazine::Upload do
  include ActionDispatch::TestProcess::FixtureFile

  subject { described_class.new(file).call }

  context 'epub' do
    let(:file) do
      fixture_file_upload('files/saint_oniisan.epub', 'application/epub+zip')
    end

    it do
      expect do
        subject
      end.to change(::Magazine, :count).by(1)
        .and have_enqueued_job(ImportMagazineJob)
      expect(Magazine.last.title).to_not be_nil
      expect(Magazine.last.finished_at).to be_nil
      expect(Magazine.last.original_filename).to eq('saint_oniisan.epub')
    end
  end

  context 'not epub' do
    let(:file) do
      fixture_file_upload('files/image.png')
    end

    it { expect { subject }.to broadcast(:invalid) }
  end
end

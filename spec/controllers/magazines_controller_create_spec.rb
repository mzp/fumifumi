# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  let(:attachment) do
    fixture_file_upload('files/saint_oniisan.epub', 'application/epub+zip')
  end

  describe '#create' do
    subject do
      post :create, params: {
        magazine: { attachment: attachment }
      }
    end

    it do
      expect do
        subject
      end.to change(::Magazine, :count).by(1)
        .and have_enqueued_job(ImportMagazineJob)
      expect(response).to redirect_to(magazines_path)
    end
  end
end

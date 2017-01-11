# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  describe '#create' do
    subject do
      post :create, params: {
        attachment: attachment
      }
    end

    context 'epub' do
      let(:attachment) do
        fixture_file_upload('files/saint_oniisan.epub', 'application/epub+zip')
      end

      it do
        expect do
          subject
        end.to change(::Magazine, :count).by(1)
          .and have_enqueued_job(ImportMagazineJob)
        expect(response.body).to eq('ok'.to_json)
      end
    end

    context 'not epub' do
      let(:attachment) do
        fixture_file_upload('files/image.png')
      end

      it do
        expect(subject).to be_bad_request
        expect(subject.body).to match(/Source content type is invalid/)
      end
    end
  end
end

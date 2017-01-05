# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  let(:attachment) do
    fixture_file_upload('files/saint_oniisan.epub', 'application/epub+zip')
  end

  describe '#create' do
    it do
      expect do
        post :create, params: {
          magazine: { attachment: attachment }
        }
      end.to change(::Magazine, :count).by(1)
      expect(response).to redirect_to(magazines_path)
    end
  end
end

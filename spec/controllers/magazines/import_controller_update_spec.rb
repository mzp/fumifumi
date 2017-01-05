# frozen_string_literal: true

RSpec.describe Magazines::ImportController, type: :controller do
  let(:magazine) { create(:magazine) }

  describe '#update' do
    subject do
      post :update, params: { id: magazine.id }
    end

    it do
      expect do
        subject
      end.to have_enqueued_job(ImportMagazineJob)
      expect(response).to redirect_to(magazines_path)
    end
  end
end

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
      expect(response).to redirect_to(:magazines_dashboard_index)
      expect(magazine.reload.finished_at).to be_nil
    end
  end
end

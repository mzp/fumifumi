# frozen_string_literal: true

RSpec.describe Magazines::ImportController, type: :controller do
  let!(:magazines) { create_list(:magazine, 3) }

  describe '#create' do
    subject do
      post :create
    end

    it do
      expect do
        subject
      end.to have_enqueued_job(ImportAllMagazineJob)
      expect(response).to redirect_to(:magazines_dashboard_index)

      magazines.each do |magazine|
        expect(magazine.reload.finished_at).to be_nil
      end
    end
  end
end

# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  describe '#destroy' do
    let!(:magazine) { create(:magazine) }

    before { get :destroy, params: { id: magazine.id } }

    it do
      expect(response).to redirect_to(:magazines)
      expect(Magazine.exists?(magazine.id)).to be_falsy
    end
  end
end

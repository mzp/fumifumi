# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  let(:magazine) { create(:magazine) }

  describe '#show' do
    it do
      post :show, params: { id: magazine.id }
      expect(response).to be_ok
      expect(assigns[:magazine]).to eq(magazine)
    end
  end
end

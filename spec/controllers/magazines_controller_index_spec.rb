# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  describe '#index' do
    let!(:magazines) { create_list(:magazine, 3) }

    before { get :index }

    it do
      expect(response).to be_ok
      expect(assigns[:magazines]).to contain_exactly(*magazines)
    end
  end
end

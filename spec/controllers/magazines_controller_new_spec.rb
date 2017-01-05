# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  describe '#new' do
    it do
      get :new
      expect(response).to be_ok
    end
  end
end

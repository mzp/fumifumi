# frozen_string_literal: true

RSpec.describe Api::Agent::Magazines::ExistsController, type: :controller do
  let(:magazine) { create(:magazine) }
  before { get :index, params: { filename: filename } }
  subject { response.body }

  context 'exists' do
    let(:filename) { magazine.original_filename }
    it { expect(subject).to be_json_eql(true.to_json) }
  end

  context 'not exists' do
    let(:filename) { 'foo' }
    it { expect(subject).to be_json_eql(false.to_json) }
  end
end

# frozen_string_literal: true

RSpec.describe Api::Web::MagazinesController, type: :controller do
  let!(:magazines) { create_list(:magazine, 10) }

  before { get :index, params: params }

  describe 'per_page' do
    let(:params) { {} }
    subject { response.body }

    it do
      aggregate_failures do
        expect(subject).to have_json_size(3)
        expect(subject).to be_json_eql(magazines[0].id.to_json)
          .at_path('0/id')
      end
    end
  end

  describe 'page' do
    let(:params) { { page: 2 } }
    subject { response.body }

    it do
      aggregate_failures do
        expect(subject).to have_json_size(3)
        expect(subject).to be_json_eql(magazines[3].id.to_json)
          .at_path('0/id')
      end
    end
  end

  describe 'headers' do
    describe 'api-paginate provided' do
      let(:params) { {} }
      subject { response.header.to_h }

      it do
        expect(subject).to include('Total' => '10')
      end
    end

    describe'has-more' do
      subject { response.header.to_h }

      context 'not last page' do
        let(:params) { { page: 3 } }
        it { expect(subject).to include('HasMore' => 'true') }
      end

      context 'last page' do
        let(:params) { { page: 4 } }
        it { expect(subject).to include('HasMore' => 'false') }
      end

      context 'beyond last page' do
        let(:params) { { page: 5 } }
        it { expect(subject).to include('HasMore' => 'false') }
      end
    end
  end
end

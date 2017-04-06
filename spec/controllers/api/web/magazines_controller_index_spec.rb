# frozen_string_literal: true

RSpec.describe Api::Web::MagazinesController, type: :controller do
  describe '#index' do
    let(:series) { create(:series) }

    subject do
      get :index, params: { series_id: series.id }
      response.body
    end

    describe 'magazines' do
      let!(:magazine) { create(:magazine, series: series) }
      let!(:other_magazine) { create(:magazine, series: create(:series)) }
      let!(:wip_magazine) { create(:wip_magazine, series: create(:series)) }

      before do
        create(:page, magazine: magazine)
      end

      it do
        expect(response).to be_ok

        expect(subject).to include_json(magazine.to_json)
          .excluding('cover', 'url')

        expect(subject).to_not include_json(wip_magazine.to_json)
          .excluding('cover', 'url')

        expect(subject).to_not include_json(other_magazine.to_json)
          .excluding('cover', 'url')
      end
    end

    describe 'magazine' do
      let(:magazine) { create(:magazine, series: series) }
      let!(:page) { create(:page, magazine: magazine) }

      it do
        expect(subject).to be_json_eql(page_path(magazine.cover).to_json)
          .at_path('0/cover/image_url')
      end
    end
  end
end

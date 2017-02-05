# frozen_string_literal: true

RSpec.describe MagazinesController, type: :controller do
  describe '#index' do
    subject do
      get :index
      response.body
    end

    describe 'magazines' do
      let!(:magazines) { create_list(:magazine, 3) }
      let!(:wip_magazine) { create(:wip_magazine) }

      before do
        magazines.each do |magazine|
          create(:page, magazine: magazine)
        end
      end

      it do
        expect(response).to be_ok

        magazines.each do |magazine|
          expect(subject).to include_json(magazine.to_json)
            .excluding('cover', 'episodes', 'url')
        end

        expect(subject).to_not include_json(wip_magazine.to_json)
          .excluding('cover', 'episodes')
      end
    end

    describe 'magazine' do
      let(:magazine) { create(:magazine) }
      let!(:page) { create(:page, magazine: magazine) }

      it do
        expect(subject).to be_json_eql(page_path(magazine.cover).to_json)
          .at_path('0/cover/image_url')
      end
    end

    describe 'episode' do
      let(:magazine) { create(:magazine) }
      let!(:page) { create(:page, magazine: magazine) }
      let(:episode) { create(:episode, magazine: magazine) }
      before do
        create_list(:page, 3, magazine: magazine)
        magazine.create_toc!(page => episode)
      end

      it do
        expect(subject).to be_json_eql(episode.id.to_json)
          .at_path('0/episodes/0/id')
        expect(subject).to be_json_eql("/episodes/#{episode.id}".to_json)
          .at_path('0/episodes/0/url')
        expect(subject).to be_json_eql(page_path(page).to_json)
          .at_path('0/episodes/0/page/image_url')
        expect(subject).to be_json_eql(page_path(page, thumbnail: true).to_json)
          .at_path('0/episodes/0/page/thumbnail_url')
        expect(subject).to have_json_size(4)
          .at_path('0/episodes/0/pages')
      end
    end
  end
end

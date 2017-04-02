# frozen_string_literal: true

RSpec.describe Api::Web::MagazinesController, type: :controller do
  subject do
    get :show, params: { id: magazine.id }
    response.body
  end

  describe '#episodes' do
    let!(:magazine) { create(:magazine) }
    let!(:episode1) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:episode2) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:other_episode) { create(:episode, author: 'Jane Doe', magazine: create(:magazine)) }

    it do
      aggregate_failures do
        expect(subject).to be_json_eql(magazine.title.to_json)
          .at_path('title')
        expect(subject).to include_json(episode1.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
          .at_path('episodes')
        expect(subject).to include_json(episode2.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
          .at_path('episodes')
        expect(subject).to_not include_json(other_episode.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
          .at_path('episodes')
      end
    end
  end

  describe 'navigation' do
    let(:series) { create(:series) }
    let!(:magazine) { create(:magazine, series: series, original_filename: '2.epub') }
    let!(:prev) { create(:magazine, series: series, original_filename: '1.epub') }
    let!(:next_) { create(:magazine, series: series, original_filename: '3.epub') }

    it do
      expect(subject).to be_json_eql("/episodes/magazine/#{next_.id}".to_json).at_path('next/url')
      expect(subject).to be_json_eql("/episodes/magazine/#{prev.id}".to_json).at_path('prev/url')
    end
  end
end

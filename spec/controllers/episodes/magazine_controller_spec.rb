# frozen_string_literal: true

RSpec.describe Episodes::MagazineController, type: :controller do
  describe '#show' do
    let(:magazine) { create(:magazine) }
    let!(:episode1) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:episode2) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:other_episode) { create(:episode, author: 'Jane Doe', magazine: create(:magazine)) }

    subject do
      get :show, params: { id: magazine.id }
      response.body
    end

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
end

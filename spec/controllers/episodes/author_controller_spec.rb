# frozen_string_literal: true

RSpec.describe Episodes::AuthorController, type: :controller do
  describe '#index' do
    let(:magazine) { create(:magazine) }
    let!(:episode1) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:episode2) { create(:episode, author: 'John Doe', magazine: magazine) }
    let!(:other_episode) { create(:episode, author: 'Jane Doe', magazine: magazine) }

    subject do
      get :index, name: 'John Doe'
      response.body
    end

    it do
      aggregate_failures do
        expect(subject).to include_json(episode1.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
        expect(subject).to include_json(episode2.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
        expect(subject).to_not include_json(other_episode.to_json)
          .excluding('page', 'author_url', 'url', 'pages')
      end
    end
  end
end

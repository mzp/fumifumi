# frozen_string_literal: true

RSpec.describe EpisodesController, type: :controller do
  let(:magazine) { create(:magazine) }
  let(:episode) { create(:episode, magazine: magazine, author: 'John') }

  describe '#show' do
    subject do
      create_list(:page, 4, magazine: magazine, episode: episode)
      get :show, params: { id: episode.id }
      response.body
    end

    it do
      expect(subject).to be_json_eql(episode.title.to_json)
        .at_path('title')
      expect(subject).to be_json_eql('/episodes/author?name=John'.to_json)
        .at_path('author_url')
      expect(subject).to be_json_eql(magazine.title.to_json)
        .at_path('magazine_title')
      expect(subject).to have_json_size(4)
        .at_path('pages')
    end
  end
end

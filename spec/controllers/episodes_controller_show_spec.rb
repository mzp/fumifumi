# frozen_string_literal: true

RSpec.describe EpisodesController, type: :controller do
  let(:magazine) { create(:magazine) }
  let(:episode) { create(:episode, magazine: magazine, author: 'John') }

  describe '#show' do
    subject do
      page = create(:page, magazine: magazine)
      create_list :page, 3, magazine: magazine
      magazine.reload.create_toc!(page => episode)
      get :show, params: { id: episode.id }
      response.body
    end

    it do
      expect(subject).to be_json_eql(episode.title.to_json)
        .at_path('title')
      expect(subject).to be_json_eql(episodes_author_index_path(name: 'John').to_json)
        .at_path('author_url')
      expect(subject).to be_json_eql(magazine.title.to_json)
        .at_path('magazine_title')
      expect(subject).to have_json_size(4)
        .at_path('pages')
    end
  end
end

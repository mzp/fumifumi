# frozen_string_literal: true

RSpec.describe Api::Web::Episodes::SearchController, type: :controller, elasticsearch: true do
  let(:magazine) { create(:magazine) }
  let!(:foo) { create(:episode, title: 'foo bar baz', magazine: magazine) }
  subject { get :index, params: { query: 'foo' } }
  it do
    sleep 1 # waiw for indexed
    expect(subject.body).to be_json_eql('foo bar baz'.to_json).at_path('0/title')
  end
end

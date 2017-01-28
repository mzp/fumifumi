# frozen_string_literal: true
RSpec.describe PagesController, type: :controller do
  let(:page) { create(:page, magazine: create(:magazine)) }

  describe 'original' do
    before { get :show, params: { id: page.id } }
    subject { response }
    it do
      expect(subject.content_type).to eq(page.content_content_type)
      expect(subject.body).to eq(File.binread(page.content.path))
    end
  end

  describe 'thumbnail' do
    before { get :show, params: { id: page.id, thumbnail: true } }
    subject { response }
    it do
      expect(subject.content_type).to eq(page.content_content_type)
      expect(subject.body).to eq(File.binread(page.content.path(:thumbnail)))
    end
  end
end

# frozen_string_literal: true
RSpec.describe PagesController, type: :controller do
  let(:page) { create(:page, magazine: create(:magazine)) }

  before { get :show, params: { id: page.id } }
  subject { response }
  it do
    expect(subject.content_type).to eq(page.content_content_type)
    expect(subject.body).to eq(File.binread(page.content.path))
  end
end

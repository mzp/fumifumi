# frozen_string_literal: true

RSpec.describe Api::Agent::MagazinesController, type: :controller do
  let(:file) { fixture_file_upload('files/saint_oniisan.epub', 'application/epub+zip') }
  subject { post :create, params: { file: file } }
  it { expect { subject }.to have_enqueued_job(ImportMagazineJob) }
end

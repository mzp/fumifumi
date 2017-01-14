# frozen_string_literal: true

RSpec.describe Fumifumi::Episode::Info do
  let(:source) { 'John Doe「Story about acme」' }

  subject { described_class.new(source).call }

  it do
    expect(subject).to include(
      author: 'John Doe',
      title: 'Story about acme'
    )
  end
end

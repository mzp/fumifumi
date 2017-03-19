# frozen_string_literal: true

RSpec.describe Fumifumi::Parser::Episode do
  shared_examples 'parse author and title' do |source|
    context source do
      subject { described_class.new(source).call }

      it do
        expect(subject).to include(
          author: 'John Doe',
          title: 'Story about acme'
        )
      end
    end
  end

  include_examples 'parse author and title', 'John Doe「Story about acme」'
  include_examples 'parse author and title', 'John Doe (Story about acme)'
end

# frozen_string_literal: true
module Resource
  class Series < Base
    field :magazines, proc: lambda {
      model.magazines.recent.map(&Resource::MagazineOverview.method(:new))
    }
  end
end

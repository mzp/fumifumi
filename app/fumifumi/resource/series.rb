# frozen_string_literal: true

module Resource
  class Series < Base
    field :magazines, proc: lambda {
      model.magazines.recent.limit(5).map(&Resource::MagazineOverview.method(:new))
    }
    field :magazines_url, proc: lambda {
      if model.magazines.count < 5
        nil
      else
        api_web_magazines_path(series_id: model.id, page: 2, per_page: 5)
      end
    }
  end
end

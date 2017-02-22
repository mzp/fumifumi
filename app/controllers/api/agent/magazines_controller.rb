# frozen_string_literal: true
module Api
  module Agent
    class MagazinesController < ApiController
      def create
        Fumifumi::Magazine::Upload
          .new(params[:file])
          .on(:invalid) { return render(json: 'ng'.to_json) }
          .call
        render json: 'ok'.to_json
      end
    end
  end
end

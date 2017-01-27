# frozen_string_literal: true
module FactoryGirlHelper
  def create_force(*args)
    build(*args).tap { |model| model.save!(validate: false) }
  end

  def create_list_force(*args)
    build_list(*args).tap do |xs|
      xs.each { |x| x.save!(validate: false) }
    end
  end
end

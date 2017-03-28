# frozen_string_literal: true

module Resource
  module DSL
    extend ActiveSupport::Concern

    class_methods do
      def fields
        @field ||= []
      end

      def array_fields
        @array_fields ||= []
      end

      private

      def field(name, **args)
        fields << OpenStruct.new(name: name, **args)
      end

      def array_field(name, **args)
        array_fields << OpenStruct.new(name: name, **args)
      end
    end

    def dsl(json)
      json&.merge(**fields, **array_fields)
    end

    def fields
      classes(:fields).each_with_object({}) do |field, hash|
        name = field.name

        if field.with.present?
          value = model.send(name)
          hash[name] = field.with.new(value)
        elsif field.proc.present?
          hash[name] = instance_eval(&field.proc)
        end
      end
    end

    def array_fields
      classes(:array_fields).each_with_object({}) do |field, hash|
        name = field.name

        xs = model.send(name)
        hash[name] = xs.map(&field.with.method(:new))
      end
    end

    def classes(sym)
      self.class.ancestors.flat_map do |c|
        c.try(sym) || []
      end
    end
  end
end

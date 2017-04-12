require "porch"
require_relative "steps/build_task_from_deed"
require_relative "steps/destroy_deed"
require_relative "steps/save_task"

module Services
  class UndoDeed
    include Porch::Organizer

    attr_reader :attributes

    def initialize(attributes)
      @attributes = attributes
    end

    def execute
      with(attributes) do |chain|
        chain.add BuildTaskFromDeed
        chain.add SaveTask
        chain.add DestroyDeed
      end
    end
  end
end

require "porch"
require_relative "steps/build_deed_from_task"
require_relative "steps/repeat_or_complete_task"
require_relative "steps/save_deed"

module Services
  class CompleteTask
    include Porch::Organizer

    attr_reader :attributes

    def initialize(attributes)
      @attributes = attributes
    end

    def execute
      with(attributes) do |chain|
        chain.add BuildDeedFromTask
        chain.add SaveDeed
        chain.add RepeatOrCompleteTask
      end
    end
  end
end

require "porch"
require_relative "steps/add_focus_position"
require_relative "steps/build_focus"
require_relative "steps/save_focus"

module Services
  class AddNewFocus
    include Porch::Organizer

    attr_reader :attributes

    def initialize(attributes)
      @attributes = attributes
    end

    def execute
      with(attributes) do |chain|
        chain.add AddFocusPosition
        chain.add BuildFocus
        chain.add SaveFocus
      end
    end
  end
end

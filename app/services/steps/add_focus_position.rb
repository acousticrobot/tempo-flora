require "porch"

class AddFocusPosition

  def call(context)
    # Positions starts at zero, new focus is added last.
    # Max number of foci is 5.
    count = context.user.foci.count
    context.fail! "Max Foci already allotted" if count >= 50
    context[:focus_position] = count
  end
end

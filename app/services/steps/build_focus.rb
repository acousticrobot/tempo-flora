require "porch"

class BuildFocus

  def call(context)

    # defaults
    title = context.title || "new focus"

    context[:focus] = Focus.new(
      user: context.user, title: title,
      position: context.focus_position
    )
  end
end

require "porch"

class BuildDeedFromTask

  def call(context)

    context[:deed] = Deed.new(
      title:        context.task.title,
      focus_title:  context.task.focus.title,
      completed_at: DateTime.now,
      position:     context.task.focus.position,
      points:       context.task.points,
      user:         context.user,
    )
  end
end


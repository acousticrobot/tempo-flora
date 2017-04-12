require "porch"

class BuildTaskFromDeed

  def call(context)

    # don't create a new task if a reapeatable one already exists
    task = Task.where(title: context.deed.title, focus: context.focus, repeatable: true).first

    if task
     context[:task] = task
    else
      context[:task] = Task.new(
        title:        context.deed.title,
        focus:        context.focus,
        points:       context.deed.points,
        user:         context.user
      )
    end
  end
end

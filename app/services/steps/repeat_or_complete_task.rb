require "porch"

class RepeatOrCompleteTask

  def call(context)

    if context.task.repeatable
      # do nothing
    else
      context.task.remove_from_list
      context.task.destroy
    end
  end
end

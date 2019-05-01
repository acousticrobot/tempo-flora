require "porch"

class RepeatOrCompleteTask

  def call(context)

    if context.task.repeatable
      context.task.move_to_bottom
    else
      context.task.remove_from_list
      context.task.destroy
    end
  end
end

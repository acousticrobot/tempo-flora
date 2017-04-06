require "porch"

class RepeatOrCompleteTask

  def call(context)

    if context.task.repeatable
      # nothing for now
      # could update time or position
    else
      context.task.destroy
    end
  end
end

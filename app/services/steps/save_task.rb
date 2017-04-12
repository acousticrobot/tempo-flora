require "porch"

class SaveTask

  def call(context)
    if context.task.valid?
      context.task.save
    else
      context.fail! context.task.errors.messages
    end
  end
end

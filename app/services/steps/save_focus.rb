require "porch"

class SaveFocus

  def call(context)
    if context.focus.valid?
      context.focus.save
    else
      context.fail! context.focus.errors.messages
    end
  end
end

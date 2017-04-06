require "porch"

class SaveDeed

  def call(context)
    if context.deed.valid?
      context.deed.save
    else
      context.fail! context.deed.errors.messages
    end
  end
end

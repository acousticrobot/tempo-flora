require "porch"

class DestroyDeed

  def call(context)

    context.deed.destroy
  end
end

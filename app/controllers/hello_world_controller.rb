class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
  end

  def tictactoe
  end
end

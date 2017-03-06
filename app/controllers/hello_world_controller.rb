class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
  end

  def tictactoe
  end

  def flouride
    @user_id = current_user.id
  end
end

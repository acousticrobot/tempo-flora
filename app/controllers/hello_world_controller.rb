class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
  end

  def test
    render json: { message: "Onboarding Confirmed", success: true }
  end

  def tictactoe
  end

  def flouride
  end
end

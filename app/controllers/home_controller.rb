class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @message = "Grow Your Time!"
    @user = current_user
    @foci = @user.foci.includes(:tasks)
    @deeds = @user.deeds
  end
end

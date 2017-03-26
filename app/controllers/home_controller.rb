class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @flora_props = { userId: current_user.id }

    @foci = current_user.foci.includes(:tasks)
    #@deeds = @user.deeds
  end
end

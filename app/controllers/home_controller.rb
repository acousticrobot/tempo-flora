class HomeController < ApplicationController
  before_action :authenticate_user!
  before_action :set_theme

  def index
    @server_props = {
     userName: current_user.username,
     userId: current_user.id,
     theme: current_user.theme
   }
  end
end

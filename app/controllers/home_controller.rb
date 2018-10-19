class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @server_props = {
     userName: current_user.username,
     userId: current_user.id
   }
  end
end

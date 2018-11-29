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

  def flora
    @foci = current_user.foci
    @deeds_by_date = current_user.deeds
      .since(7.days.ago).order_by_completion
      .group_by { |deed| deed.completed_at.to_date }
  end
end

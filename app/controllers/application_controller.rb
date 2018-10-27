class ApplicationController < ActionController::Base

  def set_theme
    if current_user.present?
      @theme = current_user.theme
    end
    @theme ||= "default"
  end
end

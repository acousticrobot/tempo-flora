class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def mailer
    @user = User.find(params[:id])
    UserMailer.welcome_email(@user).deliver_now
  end
end

class UserMailer < ApplicationMailer
  default from: 'noreply@tempoflora.com'

  def welcome_email(user)
    @user = user
    @url  = 'http://tempo-flora.herokuapp.com/login'
    mail(to: @user.email, subject: 'testing with a user mailer')
  end
end

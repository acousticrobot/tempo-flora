Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'
  devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout'}
  get '/users/:id', to: 'users#show'
  get '/users/:id/mailer', to: 'users#mailer'
  get '/users/', to: 'users#index'

  root to: "home#index"
end

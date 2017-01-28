Rails.application.routes.draw do

  devise_for :users
  get '/users/:id', to: 'users#show'
  get '/users/', to: 'users#index'

  root to: "home#index"
end

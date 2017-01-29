Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  get '/users/:id', to: 'users#show'
  get '/users/', to: 'users#index'

  root to: "home#index"
end

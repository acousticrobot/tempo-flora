Rails.application.routes.draw do

  resources :graphql, via: [:post, :options]

  devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout'}
  get '/users/:id', to: 'users#show'
  get '/users/:id/mailer', to: 'users#mailer'
  get '/users/', to: 'users#index'

  root to: "home#index"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
end

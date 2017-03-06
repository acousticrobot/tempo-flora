Rails.application.routes.draw do

  resources :graphql, via: [:post, :options]

  get 'hello_world', to: 'hello_world#index'
  get 'tictactoe', to: 'hello_world#tictactoe'
  get 'flouride', to: 'hello_world#flouride'

  devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout'}
  get '/users/:id', to: 'users#show'
  get '/users/:id/mailer', to: 'users#mailer'
  get '/users/', to: 'users#index'

  root to: "home#index"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
end

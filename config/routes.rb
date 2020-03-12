Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :show] do
      resources :friendships, only: [:create, :destroy]
    end

    resources :friendships, only: [:destroy]
    
    resource :session, only: [:create, :destroy]

    resources :transactions, only: [:create, :show, :index, :destroy]

    resources :requests, only: [:create, :show, :index, :destroy]
  end
end

Rails.application.routes.draw do
  resources :todos do
    patch :change_status, on: :member
  end

  get 'un_error', to: 'todos#un_error'

  root 'todos#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

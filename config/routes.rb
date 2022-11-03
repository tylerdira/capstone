Rails.application.routes.draw do
  resources :job_tasks
  resources :technicians
  resources :companies
  resources :homes
  resources :homeowners
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

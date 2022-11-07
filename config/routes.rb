Rails.application.routes.draw do
  resources :job_tasks
  resources :technicians
  resources :companies
  resources :homes
  resources :homeowners
 
  post '/login', to: 'sessions#create'
  get '/auth', to: 'companies#show'
end

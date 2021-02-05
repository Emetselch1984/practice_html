Rails.application.routes.draw do
  root "static_pages#index"
  get 'preview', to: 'static_pages#preview'
end

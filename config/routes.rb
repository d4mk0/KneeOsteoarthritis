Rails.application.routes.draw do
  mount Rhinoart::Engine, at: '/admin'
  root to: 'pages#index'
  match '*url' => 'pages#internal', as: :page, via: :get
end

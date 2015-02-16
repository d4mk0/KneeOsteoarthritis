class PagesController < ApplicationController#Rhinoart::PagesController
  def index
    @page = Rhinoart::Page.find_by_path('index')
    render :frontend_page
  end

  def internal
    @page = Rhinoart::Page.find_by_path(params[:url])
    render :frontend_page
  end
end

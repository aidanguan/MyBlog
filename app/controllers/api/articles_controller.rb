class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.order("created_at desc").page(params[:page]||1).per(params[:per]||5)

  end

end

class ApisController < ApplicationController
    # before_filter :response_json
    # response_to :json

  def articles
    @article = Article.all.page(params[:page]||1).per(params[:per]||5)
  end

end

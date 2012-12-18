class Store2Controller < ApplicationController
  	  skip_before_filter :authorize

  def index
    @products = Product.search(params[:search], params[:page])
    @cart = current_cart
  end
end

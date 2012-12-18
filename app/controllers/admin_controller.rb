class AdminController < ApplicationController

	before_filter :authorize 
	
  def index
  	@total_orders = Order.count
    @user = User.new
  end

    protected

  def authorize
    if User.find_by_id(session[:user_id])
    redirect_to login_url, notice: "You are logged in"
    end
  end
end

class StaticPagesController < ApplicationController

 skip_before_filter :authorize
	
 def home
 end

 def contact
 end

 def about
 	    respond_to do |format|
      format.html # new.html.erb
      format.xml
  end
 end
end

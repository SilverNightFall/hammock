class Contact < ActiveRecord::Base
  attr_accessible :comment, :name, :phone
end

class Order < ActiveRecord::Base
  attr_accessible :address, :email, :name, :pay_type
  has_many :line_items, dependent: :destroy
  PAYMENT_TYPES = [ "Check", "Credit card", "Purchase order" ]
  validates :name, :address, :email, presence: true
  validates :pay_type, inclusion: PAYMENT_TYPES

  def self.search(search, page)
    paginate :per_page => 5, :page => page,
      :conditions => ['name like ?', "%#{search}%"],
      :order => 'name'
  end

  def add_line_items_from_cart(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end
end

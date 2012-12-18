class Product < ActiveRecord::Base
  attr_accessible :poem, :image_url, :price, :name, :birthday, :poem, :count
  validates :name, :image_url, :count, :price, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}

  has_many :line_items
  has_many :orders, through: :line_items
  before_destroy :ensure_not_referenced_by_any_line_item
  
  def self.search(search, page)
    paginate :per_page => 5, :page => page,
      :conditions => ['name like ?', "%#{search}%"],
      :order => 'name'
  end
  private
  # ensure that there are no line items referencing this product
  def ensure_not_referenced_by_any_line_item
    if line_items.empty?
      return true
    else
      errors.add(:base, 'Line Items present')
      return false
    end
  end
end

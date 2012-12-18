class AddCountToProducts < ActiveRecord::Migration
  def change
    add_column :products, :count, :integer, :default => "1"
  end
end

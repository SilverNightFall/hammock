class AddPaymentColumns < ActiveRecord::Migration
def change
    add_column :orders, :creditcard, :string
    add_column :orders, :check, :string
    add_column :orders, :purchaseorder, :string
end
end

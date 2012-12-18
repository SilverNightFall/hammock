class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :image_url
      t.decimal :price, precision: 8, scale: 2
      t.integer :count, :default => "1"

      t.timestamps
    end
  end
end

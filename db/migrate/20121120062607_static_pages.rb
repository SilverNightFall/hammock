class StaticPages < ActiveRecord::Migration
  def up
  	add_column :static_pages, :latitude,  :float #you can change the name, see wiki
    add_column :static_pages, :longitude, :float #you can change the name, see wiki
    add_column :static_pages, :gmaps, :boolean #not mandatory, see wiki
  end

  def down
  end
end

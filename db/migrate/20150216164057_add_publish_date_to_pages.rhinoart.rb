# This migration comes from rhinoart (originally 20130603074119)
class AddPublishDateToPages < ActiveRecord::Migration
  def change
    change_table :rhinoart_pages do |t|
      t.date :publish_date, :null => false, :default => Time.now
    end   	
  end
end

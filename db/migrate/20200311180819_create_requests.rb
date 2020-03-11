class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer :user_id, null: false
      t.integer :payer_id, null: false
      t.float :amount, null: false
      t.string :description, null: false
      t.boolean :complete, null: false, default: false
      
      t.timestamps
    end

    add_index :requests, :user_id
    add_index :requests, :payer_id
  end
end

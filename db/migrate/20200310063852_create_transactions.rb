class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :recipient_id, null: false
      t.float :amount, null: false, scale: 2
      t.string :description, null: false
      t.boolean :complete, null: false, default: false
      
      t.timestamps
    end

    add_index :transactions, :user_id
    add_index :transactions, :recipient_id
  end
end

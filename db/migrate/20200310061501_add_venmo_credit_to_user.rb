class AddVenmoCreditToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :venmo_credit, :float, null: false, default: 250.00, scale: 2
  end
end

class RemoveVenmoCreditFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :venmo_credit, :string
  end
end

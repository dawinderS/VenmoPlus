class AddCreditToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :venmo_credit, :float
  end
end

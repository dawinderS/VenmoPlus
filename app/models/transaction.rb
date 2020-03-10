# == Schema Information
#
# Table name: transactions
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  recipient_id :integer          not null
#  amount       :float            not null
#  description  :string           not null
#  complete     :boolean          default("false"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Transaction < ApplicationRecord
  validates :user_id, :recipient_id, :amount, :description, presence: true
  validates :amount, numericality: true

  belongs_to :user

  belongs_to :recipient,
    foreign_key: :recipient_id,
    class_name: :User


end

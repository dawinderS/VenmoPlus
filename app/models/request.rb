# == Schema Information
#
# Table name: requests
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  payer_id    :integer          not null
#  amount      :float            not null
#  description :string           not null
#  complete    :boolean          default("false"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Request < ApplicationRecord
  validates :user_id, :payer_id, :amount, :description, presence: true
  validates :amount, numericality: true

  belongs_to :user

  belongs_to :payer,
    foreign_key: :payer_id,
    class_name: :User

end

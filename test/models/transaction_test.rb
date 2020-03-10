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
require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

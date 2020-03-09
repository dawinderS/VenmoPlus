# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord

  validates :friend_id, uniqueness: { scope: :user_id } # ???

  belongs_to :user

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User

end

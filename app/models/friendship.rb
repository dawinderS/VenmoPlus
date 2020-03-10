# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  status     :string
#
class Friendship < ApplicationRecord

  validates :user_id, :friend_id, presence: true
  validates :status, inclusion: { in: ['requested', 'accepted']}
  validates :friend_id, uniqueness: { scope: :user_id } # ???

  belongs_to :user

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User

  def self.already_friends?(user, friend)
    !Friendship.where(user_id: user_id, friend_id:friend.id).nil? || !Friendship.where(user_id: friend_id, friend_id: user_id).nil?
  end

  def self.request_friend(user, friend)

  end
end

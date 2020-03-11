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
  validates :status, inclusion: { in: ['pending', 'accepted']}
  validates :friend_id, uniqueness: { scope: :user_id } # ???

  belongs_to :user

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User

    
  def self.request_friend(user, friend)
    if Friendship.already_friends?(user, friend) || user == friend
      return false
    else
      transaction do
        create!(user_id: user.id, friend_id: friend.id, status: 'pending')
        create!(user_id: friend.id, friend_id: user.id, status: 'pending')
      end
    end
  end
  
  def self.already_friends?(user, friend)
    !Friendship.where(user_id: user_id, friend_id:friend.id).nil? || !Friendship.where(user_id: friend_id, friend_id: user_id).nil?
  end

  def accept_both(user, friend)
    transaction do
      accept_friend(user, friend)
      accept_friend(friend, user)
    end
  end

  def self.accept_friend(user, friend)
    request = find_by(user_id: user.id, friend_id: friend.id)
    request.status = 'accepted'
    request.save!
  end
  
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  venmo_credit    :float            default("250.0"), not null
#
class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  before_validation :ensure_session_token
  
  attr_reader :password

  has_many :friendships

  has_many :friends, through: :friendships

  has_many :friend_requests,
    through: :friendships,
    source: :friends
  
  has_many :pending_friends, 
    through: :friendships,
    source: :friend

  has_many :transactions

  has_many :received_transactions,
    foreign_key: :recipient_id,
    class_name: :Transaction
  
  has_many :sent_transactions,
    foreign_key: :user_id,
    class_name: :Transaction

  has_many :requests

  has_many :received_requests,
    foreign_key: :payer_id,
    class_name: :Request

  has_many :sent_requests,
    foreign_key: :user_id,
    class_name: :Request
  

  def self.find_by_credentials(username, email, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)    
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def receiving_credit(amt)
    self.venmo_credit += amt
    self.save!
  end

  def paying_credit(amt)
    self.venmo_credit -= amt
    self.save!
  end

  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

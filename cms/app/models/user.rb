class User < ApplicationRecord
  before_create :generate_auth_token!
  
  validates :auth_token, uniqueness: true
  validates :name,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum role: [:user, :admin]

  def generate_auth_token!
    self.auth_token = Devise.friendly_token
  end
  def set_default_role
    self.role ||= :user if self.new_record?
  end
end

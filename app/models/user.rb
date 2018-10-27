class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable and :omniauthable
  devise :confirmable, :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :foci, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :deeds, dependent: :destroy

  validates_presence_of :max_foci

  validates :username,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { maximum: 30 }
end

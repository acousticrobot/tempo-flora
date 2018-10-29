class Focus < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy

  scope :order_by_position, -> { order("position ASC") }

  def deeds
    Deed.where(position: self.position, user: self.user)
  end
end

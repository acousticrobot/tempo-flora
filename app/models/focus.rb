class Focus < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  has_many :deeds, dependent: :destroy

  scope :order_by_position, -> { order("position ASC") }

end

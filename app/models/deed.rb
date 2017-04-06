class Deed < ApplicationRecord
  belongs_to :user

  validates_presence_of :user
  validates :daystring, presence: true

  scope :order_by_creation, -> { order("updated_at DESC") }
end

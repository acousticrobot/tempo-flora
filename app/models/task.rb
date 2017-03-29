class Task < ApplicationRecord
  belongs_to :user
  belongs_to :focus

  scope :order_by_creation, -> { order("updated_at DESC") }
end

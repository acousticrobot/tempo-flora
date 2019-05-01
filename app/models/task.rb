class Task < ApplicationRecord
  belongs_to :user
  belongs_to :focus

  acts_as_list scope: :focus
  scope :order_by_position, -> { order("position ASC") }
end

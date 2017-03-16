class Task < ApplicationRecord
  belongs_to :user
  belongs_to :focus

  scope :order_by_title, -> { order("title ASC") }
end

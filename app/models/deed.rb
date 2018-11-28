class Deed < ApplicationRecord
  belongs_to :user
  belongs_to :focus

  validates_presence_of :user
  validates :completed_at, presence: true

  scope :order_by_completion, -> { order("completed_at DESC") }
  scope :since, ->(date) { where('completed_at > ?', date)}
end

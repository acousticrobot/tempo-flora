class Focus < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  has_many :deeds, dependent: :destroy

  scope :order_by_position, -> { order("position ASC") }

  def color_hsl
    case position.to_i % 6
    when 0
      "hsl(0, 70%, 50%)"
    when 1
      "hsl(25, 95%, 50%)"
    when 2
      "hsl(25, 50%, 31%)"
    when 3
      "hsl(82, 85%, 37%)"
    when 4
      "hsl(205, 95%, 50%)"
    when 5
      "hsl(275, 75%, 50%)"
    else
      "pink"
    end
  end

  def color
    case position.to_i % 6
    when 0
      "GREY"
    when 1
      "RED"
    when 2
      "ORANGE"
    when 3
      "BROWN"
    when 4
      "GREEN"
    when 5
      "BLUE"
    when 6
      "PURPLE"
    else
      "GREY"
    end
  end
end

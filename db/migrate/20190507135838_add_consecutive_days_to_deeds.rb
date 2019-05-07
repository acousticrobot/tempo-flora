class AddConsecutiveDaysToDeeds < ActiveRecord::Migration[5.2]
  def change
    add_column :deeds, :consecutive_days, :integer, null: false,  default: 1
  end
end

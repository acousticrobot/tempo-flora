class AddFocusIdToDeed < ActiveRecord::Migration[5.2]
  def change
    add_column :deeds, :focus_id, :integer
  end
end

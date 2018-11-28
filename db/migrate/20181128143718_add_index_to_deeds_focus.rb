class AddIndexToDeedsFocus < ActiveRecord::Migration[5.2]
  def change
    change_column_null :deeds, :focus_id, false
    add_index :deeds, :focus_id
  end
end

class AddCompletedAtToDeed < ActiveRecord::Migration[5.0]
  def change
    remove_column :deeds, :daystring, :string
    add_column :deeds, :completed_at, :datetime, null: false
  end
end

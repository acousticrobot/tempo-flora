class AddPresetsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :max_foci, :integer, null: false,  default: 1
    add_column :users, :theme, :string, null: false,  default: "DEFAULT"
  end
end

class AddCategoriesTopicsAndTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :foci do |t|
      t.string :title,         null: false, default: ""
      t.integer :user_id,      null: false
      t.integer :position,     null: false, default: 0
      t.timestamps null: false
    end

    create_table :tasks do |t|
      t.string  :title,        null: false, default: ""
      t.integer :user_id,      null: false
      t.integer :focus_id,     null: false
      t.integer :points,       null: false, default: 0
      t.boolean :repeatable,   null: false, default: false
      t.boolean :completed,    null: false, default: false
      t.timestamps null: false
    end

    create_table :deeds do |t|
      t.string :title,         null: false, default: ""
      t.string :focus_title,   null: false, default: ""
      t.string :daystring,     null: false
      t.integer :position,     null: false, default: 0
      t.integer :points,       null: false, default: 0
      t.integer :user_id,      null: false
      t.timestamps null: false
    end

    add_index :foci, :user_id
    add_index :tasks, :user_id
    add_index :deeds, :user_id
  end
end

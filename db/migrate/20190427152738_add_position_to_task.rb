class AddPositionToTask < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :position, :integer
    Focus.all.each do |foci|
      foci.tasks.order(:updated_at).each.with_index(1) do |task, index|
        task.update_column :position, index
      end
    end
  end
end

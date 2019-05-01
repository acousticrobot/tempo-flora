module Types
  class TaskType < Types::BaseObject

    field :id, ID, null: false
    field :title, String, null: false
    field :focus_title, String, null: true
    field :points, Integer, null: false
    field :task_id, Integer, null: false
    field :repeatable, Boolean, null: false
    field :position, Integer, null: true
  end
end

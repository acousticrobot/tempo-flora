require "rails_helper"

describe Task do
  let(:focus) { create :focus }
  let(:task) { create :task, focus: focus }
  let(:task_2) { create :task, focus: focus }

  describe "position" do
    it "adds indexes to newer tasks based on focus" do
      expect(task.position).to eq(1)
      expect(task_2.position).to eq(2)
      task_on_other_list = create :task
      expect(task_on_other_list.position).to eq(1)
    end

    it "relies on remove_from_list to reorder list" do
      task
      task_2
      expect{ task.remove_from_list }.to change{ task_2.reload.position }.by -1
    end
  end
end

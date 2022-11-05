class RemoveQuestionmarkFromJobtasks < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_tasks, :completed?, :completed
  end
end

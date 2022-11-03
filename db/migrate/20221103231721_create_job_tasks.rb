class CreateJobTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :job_tasks do |t|
      t.references :technicians, null: false, foreign_key: true
      t.references :homes, null: false, foreign_key: true
      t.string :status
      t.string :description
      t.boolean :completed?

      t.timestamps
    end
  end
end

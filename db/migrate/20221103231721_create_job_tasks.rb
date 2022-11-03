class CreateJobTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :job_tasks do |t|
      t.references :Technician, null: false, foreign_key: true
      t.references :Home, null: false, foreign_key: true
      t.string :status
      t.string :description
      t.boolean :completed?

      t.timestamps
    end
  end
end

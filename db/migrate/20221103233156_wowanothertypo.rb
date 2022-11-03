class Wowanothertypo < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_tasks, :technicians_id, :technician_id
  end
end

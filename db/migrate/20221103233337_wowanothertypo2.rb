class Wowanothertypo2 < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_tasks, :homes_id, :home_id
  end
end

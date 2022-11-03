class Fixtypo2 < ActiveRecord::Migration[7.0]
  def change
    rename_column :technicians, :companies_id, :company_id
  end
end

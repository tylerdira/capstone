class Fixtypo < ActiveRecord::Migration[7.0]
  def change
    rename_column :homeowners, :secondary_phone_nnumber, :secondary_phone_number
  end
end

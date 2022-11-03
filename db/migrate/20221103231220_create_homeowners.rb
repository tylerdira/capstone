class CreateHomeowners < ActiveRecord::Migration[7.0]
  def change
    create_table :homeowners do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :phone_number
      t.string :secondary_phone_nnumber
      t.string :role

      t.timestamps
    end
  end
end

class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :phone_number
      t.string :role

      t.timestamps
    end
  end
end

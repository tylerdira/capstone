class CreateTechnicians < ActiveRecord::Migration[7.0]
  def change
    create_table :technicians do |t|
      t.references :Company, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :phone_number
      t.string :profession
      t.string :role

      t.timestamps
    end
  end
end

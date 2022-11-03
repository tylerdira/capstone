# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_03_233337) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "homeowners", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "secondary_phone_number"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "homes", force: :cascade do |t|
    t.bigint "homeowner_id", null: false
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "job_start_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["homeowner_id"], name: "index_homes_on_homeowner_id"
  end

  create_table "job_tasks", force: :cascade do |t|
    t.bigint "technician_id", null: false
    t.bigint "home_id", null: false
    t.string "status"
    t.string "description"
    t.boolean "completed?"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_id"], name: "index_job_tasks_on_home_id"
    t.index ["technician_id"], name: "index_job_tasks_on_technician_id"
  end

  create_table "technicians", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "profession"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_technicians_on_company_id"
  end

  add_foreign_key "homes", "homeowners"
  add_foreign_key "job_tasks", "homes"
  add_foreign_key "job_tasks", "technicians"
  add_foreign_key "technicians", "companies"
end

class Technician < ApplicationRecord
  belongs_to :company
  has_many :job_tasks, dependent: :destroy
  has_many :homes, through: :job_tasks

  validates :phone_number, length: { is: 10}
  validates_presence_of :first_name, :last_name, :email, :phone_number, :password_digest, :profession
end

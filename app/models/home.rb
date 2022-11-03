class Home < ApplicationRecord
  belongs_to :homeowner
  has_many :job_tasks
  has_many :technicians, through: :job_tasks
end

class JobTask < ApplicationRecord
  belongs_to :Technician
  belongs_to :Home
end

class JobTask < ApplicationRecord
  belongs_to :technician
  belongs_to :home
end

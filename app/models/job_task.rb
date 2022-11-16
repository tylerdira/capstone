class JobTask < ApplicationRecord
  belongs_to :technician
  belongs_to :home


  validates :description, presence: :true, length: {maximum: 245}
end

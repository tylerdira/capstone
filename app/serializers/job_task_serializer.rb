class JobTaskSerializer < ActiveModel::Serializer
  attributes :id, :status, :description, :completed?
  has_one :Technician
  has_one :Home
end

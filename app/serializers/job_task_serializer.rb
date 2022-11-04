class JobTaskSerializer < ActiveModel::Serializer
  attributes :id, :status, :description, :completed?
  has_one :technician
  has_one :home
end

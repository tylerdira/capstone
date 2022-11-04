class HomeSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :job_start_image
  has_one :homeowner
end

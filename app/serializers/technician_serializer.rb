class TechnicianSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :phone_number, :profession, :role
  has_one :company
end

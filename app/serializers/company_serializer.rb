class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :phone_number, :role
end

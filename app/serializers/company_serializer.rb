class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :phone_number, :role
end

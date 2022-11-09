class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :phone_number, :role, :jobs
  has_many :technicians

  def jobs
    object.technicians.map { |tech| tech.job_tasks }.flatten
  end

end

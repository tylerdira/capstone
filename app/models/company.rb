class Company < ApplicationRecord
    has_many :technicians
    validates :name, :email, :password_digest, :phone_number, presence: true
    validates :password_digest, length: {in: 6..50}
    validates :email, :phone_number, uniqueness: true
end

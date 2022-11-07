class Company < ApplicationRecord
    has_secure_password
        
    has_many :technicians
    
    validates :name, :email, :password_digest, :phone_number, presence: true
    validates :password, length: {in: 6..50}
    validates :email, :phone_number, uniqueness: true
end

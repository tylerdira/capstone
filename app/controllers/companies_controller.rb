class CompaniesController < ApplicationController
    def create
        company = Company.create!(company_params)
        render json: company
    end

    private 

    def company_params
        params.permit(:name, :email, :password_digest, :phone_number, :role)
    end
end

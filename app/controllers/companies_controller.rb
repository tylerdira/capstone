class CompaniesController < ApplicationController
    # skip_before_action :authorize
    
    def index
        render json: Company.all
    end

    def show
        current_company = Compnay.find(session[:company_id])
        render json: current_company
    end
    
    def create
        company = Company.create!(company_params)
        # session[:company_id] = company.id
        render json: company, status: :created
    end

    private 

    def company_params
        params.permit(:name, :email, :password, :phone_number, :role)
    end
end

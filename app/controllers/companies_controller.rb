class CompaniesController < ApplicationController
    skip_before_action :authorized, only: [:create, :show, :index, :myJobTasks]
    
    def index
        render json: Company.all
    end

    def show
        current_company = Company.find(session[:company_id])
        render json: current_company, include: ['technicians', 'technicians.job_tasks'] 
    end
    
    def create
        company = Company.create!(company_params)
        render json: company, status: :created
    end

    def myJobTasks
        # company = Company.find(params [:company_id])
        myTechnicians = Technician.where(company_id: 1)
        # session[:company_id]
        myJobs = JobTask.where(Technician.where(company_id: 1))
        render json: myJobs
    end

    private 

    def company_params
        params.permit(:name, :email, :password, :phone_number, :role)
    end
end

class TechniciansController < ApplicationController
    skip_before_action :authorized
    
    def index
        render json: Technician.all
    end

    def show
        technician = Technician.find(params[:id])
        render json: technician
    end
    


    def create
        technician = Technician.create!(technician_params)
        render json: technician, status: :created 
    end

    def destroy
        technician = Technician.find(params[:id])
        technician.destroy
        head :no_content
    end


    private 

    def technician_params
        params.permit(:company_id, :first_name, :last_name, :email, :password_digest, :phone_number, :profession, :role)
    end
end

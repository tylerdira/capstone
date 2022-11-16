class JobTasksController < ApplicationController
    skip_before_action :authorized
    
    def index
        render json: JobTask.all
    end

    def show
        jobtask = JobTask.find(params[:id])
        render json: jobtask
    end

    def update
        jobtask = JobTask.find(params[:id])
        jobtask.update(jobtask_params)
        render json: jobtask
    end
    

    def create
        jobtask = JobTask.create!(jobtask_params)
        render json: jobtask, status: :created
    end

    def destroy
        jobtask = JobTask.find(params[:id])
        jobtask.destroy
        head :no_content
    end


    private 

    def jobtask_params
        params.permit(:technician_id, :home_id, :status, :description, :completed)
    end
end

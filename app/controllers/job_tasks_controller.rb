class JobTasksController < ApplicationController
    
    def index
        render json: JobTask.all
    end
    

    ##Not working?
    def create
        jobtask = JobTask.create!(jobtask_params)
        render json: jobtask
    end


    private 

    def jobtask_params
        params.permit(:technician_id, :home_id, :status, :description, :completed?)
    end
end

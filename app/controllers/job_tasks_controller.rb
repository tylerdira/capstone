class JobTasksController < ApplicationController
    def create
        jobtask = JobTask.create!(jobtask_params)
        render json: jobtask
    end


    private 

    def jobtask_params
        params.permit(:technician_id, :home_id, :status, :description, :completed?)
    end
end

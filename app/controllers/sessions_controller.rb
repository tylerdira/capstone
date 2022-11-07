class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create


    def create
        company = Company.find_by(email: params[:email])
        if company&.authenticate(params[:password])
            session[:company_id] = company.id
            render json: company, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

  
    # def destroy
    #   session.delete :company_id
    #   head :no_content
    # end
end
class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response 

    before_action :authorized


    private

    def render_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
      end
    
    def render_invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorized
        @current_user = Company.find_by(id: session[:company_id])
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
        
        # return render json:{error: "Not authorized"}, status: :unauthorized unless session.include? :company_id
    end

    # def authorize
    #     @current_company = Company.find_by(company_id: session[:company_id])
    #     render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_company
    #   end
end

class HomesController < ApplicationController
    skip_before_action :authorized
    
    def index
        render json: Home.all
    end
end

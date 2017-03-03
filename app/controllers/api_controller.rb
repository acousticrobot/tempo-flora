class ApiController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    query_string = params[:query]
    query_variables = params[:variables] || {}
    result = FocusSchema.execute(query_string, variables: query_variables)
    render json: result
  end
end

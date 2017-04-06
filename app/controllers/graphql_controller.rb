class GraphqlController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = TempoFloraSchema.execute(
      query_string,
      variables: query_variables,
      context: {
        current_user: current_user
      }
    )
    if result["errors"].nil?
      render json: result
    else
      render json: result, status: 400
    end
  end

  private

  # This allows for better errors displays in graphiql
  def ensure_hash(query_variables)
    if query_variables.blank?
      {}
    elsif query_variables.is_a?(String)
      JSON.parse(query_variables)
    else
      query_variables
    end
  end
end

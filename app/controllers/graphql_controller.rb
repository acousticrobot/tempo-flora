class GraphqlController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = FocusSchema.execute(query_string, variables: query_variables)
    render json: result
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

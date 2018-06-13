class Api::ApiController < ApplicationController
  private
  def render_errors(model)
    render json: {errors: model.errors}, status:422
  end
end

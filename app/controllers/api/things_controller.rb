class Api::ThingsController < ApplicationController
  def index
    @things = %w(stuff other foo)

    render
  end
end

require "spec_helper"

describe HomeController do

  describe "GET index" do
    it "assigns a message" do
      get :index
      expect(assigns(:message).to eq("eggs!"))
    end
  end
end

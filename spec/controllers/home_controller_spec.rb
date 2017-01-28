require "rails_helper"

describe HomeController do

  let(:user) { create :user }
  before do
    sign_in user
  end

  describe "GET index" do
    it "assigns a message" do
      get :index
      expect(assigns(:message)).to eq("Grow Your Time!")
    end
  end
end

require "rails_helper"

describe HomeController do

  let(:user) { create :user }
  before do
    sign_in user
  end

  describe "GET index" do
    it "assigns a message" do
      get :index
      expect(assigns(:flora_props)).to eq({:userId=>user.id})
    end
  end
end


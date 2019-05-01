require "rails_helper"

describe HomeController do

  let(:user) { create :user }
  before do
    sign_in user
  end

  describe "GET index" do
    it "assigns a message" do
      get :index
      expect(assigns(:server_props)).to eq(
        { theme: "DEFAULT", userId: user.id, userName: user.username }
      )
    end
  end
end


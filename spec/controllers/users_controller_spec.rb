require "rails_helper"

describe UsersController do

  let(:user) { create :user }

  describe "as user" do
    before do
      sign_in user
    end
    describe "GET index" do
      it "assigns a message" do
        get :index
        expect(assigns(:users)).to eq([user])
      end
    end
  end

  describe "as guest" do
    describe "GET index" do
      it "redirects to root" do
        expect(get :index).to redirect_to(user_session_path)
      end
    end
  end
end

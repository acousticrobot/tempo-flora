require "rails_helper"

describe UsersController do

  let(:user) { create :user }

  describe "as user" do
    before do
      sign_in user
    end
    describe "GET index" do
      it "redirects to root" do
        get :index
        expect(response).to redirect_to root_path
      end
    end

    describe "GET show" do
      it "works" do
        get :show, params: { id: user.id }
        expect(response.status).to eq(200)
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

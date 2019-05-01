describe User do
  let(:user) { create :user }

  describe "validations" do
    it "requires an email" do
      user.email = nil
      expect(user).to_not be_valid
      expect(user.errors[:email]).to include "can't be blank"
    end

    it "requires a unique email" do
      user2 = create :user
      user2.email = user.email
      expect(user2).to_not be_valid
      expect(user2.errors[:email]).to include "has already been taken"
    end

    describe "username" do
      it "is required" do
        user.username = nil
        expect(user).to_not be_valid
        expect(user.errors[:username]).to include "can't be blank"
      end

      it "must be unique" do
        user2 = create :user
        user2.username = user.username
        expect(user2).to_not be_valid
        expect(user2.errors[:username]).to include "has already been taken"
      end

      it "in not case sensitive" do
        user2 = create :user
        user2.username = user.username.upcase
        expect(user2).to_not be_valid
        expect(user2.errors[:username]).to include "has already been taken"
      end

      it "must be no more than thirty characters" do
        user.username = 31.times.map {'a'}.join
        expect(user).to_not be_valid
        expect(user.errors[:username]).to include "is too long (maximum is 30 characters)"
      end
    end
  end
end

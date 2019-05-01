FactoryBot.define do
  factory :user do
    sequence(:username, "a") { |i| "Samiam_#{i}" }
    sequence(:email, "a") { |i| "sam@iam#{i}.com" }

    before :create do |u|
      u.password = "secretsecret"
      u.password_confirmation = "secretsecret"
    end
  end
end

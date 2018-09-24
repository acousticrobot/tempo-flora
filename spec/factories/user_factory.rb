FactoryGirl.define do
  factory :user do
    sequence(:username, "a") { |i| "Samiam_#{i}" }
    sequence(:email, "a") { |i| "sam@iam#{i}.com" }
    password  "secretsecret"
    confirmed_at Time.zone.now
  end
end

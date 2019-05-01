FactoryBot.define do
  factory :task do
    association :focus
    association :user
  end
end

# run:
# rails db:drop
# rails db:setup (this also runs the db:seed command)

user = User.new(
  email: "hello@jonathangabel.com",
  username: "AcousticRobot",
  password: 'password',
  password_confirmation: 'password'
)
user.skip_confirmation!
user.save!

focus_health =
  Focus.create(
    user: user,
    title: "Health",
    position: 1
  )

focus_home =
Focus.create(
  user: user,
  title: "Home Improvement",
  position: 2
)

focus_lang =
Focus.create(
  user: user,
  title: "Spanish",
  position: 3
)

focus_code =
Focus.create(
  user: user,
  title: "Coding",
  position: 4
)

#====================== Focus: Health ======================================#

Task.create(
  title: "running",
  user: user,
  focus: focus_health,
  points: 5,
  repeatable: true
)

Task.create(
  title: "walk 2,000 steps",
  user: user,
  focus: focus_health,
  points: 1,
  repeatable: true
)

Task.create(
  title: "yoga",
  user: user,
  focus: focus_health,
  points: 5,
  repeatable: true
)

#====================== Focus: Home Improvement ============================#

Task.create(
  title: "clean up workspace",
  user: user,
  focus: focus_home,
  points: 1,
  repeatable: false
)

Task.create(
  title: "cut dadoes in table legs",
  user: user,
  focus: focus_home,
  points: 5,
  repeatable: false
)

Task.create(
  title: "call plumber",
  user: user,
  focus: focus_home,
  points: 3,
  repeatable: true
)


#====================== Focus: Coding ======================================#

Deed.create(
  title: "add base models",
  focus_title: "Coding",
  position: 4,
  user: user,
  points: 5,
  daystring: 120226
)


#====================== Focus: Spanish =====================================#

Task.create(
  title: "duolingo lesson",
  user: user,
  focus: focus_lang,
  points: 5,
  repeatable: true
)



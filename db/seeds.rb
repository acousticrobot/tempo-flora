# run:
# rails db:drop
# rails db:setup (this also runs the db:seed command)


#====================== Creation Methods ======================================#

def addFociForUser(user, *titles)
  titles.each_with_index do |title,i|
    Focus.create(
      user: user,
      title: title,
      position: i
    )
  end
end

def addTaskForFocus(focus,params)
  Task.create(
    title: params[:title] || "New Task",
    focus: focus,
    user: focus.user,
    points: params[:points] || 5,
    repeatable: params[:repeatable] || false,
    completed: params[:completed] || false
  )
end

user = User.new(
  email: "hello@jonathangabel.com",
  username: "AcousticRobot",
  password: 'password',
  password_confirmation: 'password'
)
user.skip_confirmation!
user.save!

addFociForUser(user, "Health", "Build", "Communication", "Coding")

#====================== Focus: Health =========================================#

health_focus = Focus.find(1)

addTaskForFocus(health_focus,
  { title: "running", repeatable: true }
)

addTaskForFocus(health_focus,
  { title: "walk 2,000 steps", points: 1, repeatable: true}
)

addTaskForFocus(health_focus,
  { title: "yoga", repeatable: true }
)

#====================== Focus: Home Improvement ===============================#

build_focus = Focus.find(2)


addTaskForFocus(build_focus,
  { title: "clean up workspace", points: 1 }
)

addTaskForFocus(build_focus,
  { title: "cut dadoes in table legs" }
)

addTaskForFocus(build_focus,
  { title: "call plumber", points: 3, repeatable: true }
)

#====================== Focus: Communication ==================================#

communication_focus = Focus.find(3)

addTaskForFocus(communication_focus,
  { title: "duolingo Spanish lesson", repeatable: true }
)

addTaskForFocus(communication_focus,
  { title: "duolingo Spanish lesson", completed: true, repeatable: true }
)

#====================== Focus: Coding =========================================#

code_focus = Focus.find(4)

addTaskForFocus(code_focus,
  { title: "read about relay", points: 1, completed: true }
)

addTaskForFocus(code_focus,
  { title: "get Apollo mutations working" }
)




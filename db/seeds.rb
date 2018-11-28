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
  )
end

def addDeedForFocus(focus,params)
  Deed.create(
    title: params[:title] || "New Deed Done",
    focus_title: focus.title,
    position: focus.position,
    user: focus.user,
    points: params[:points] || 5,
    completed_at: params[:completed_at] || DateTime.now
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

addFociForUser(user, "Health", "Home", "Communication", "Coding")

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

[7.days.ago, 6.days.ago, 5.days.ago, 4.days.ago, 2.days.ago].each do |time|
  addDeedForFocus(health_focus,
    { title: "yoga", completed_at: time }
  )
end

#====================== Focus: Home Improvement ===============================#

home_focus = Focus.find(2)


addTaskForFocus(home_focus,
  { title: "clean up kitchen", points: 1, repeatable: true }
)

addTaskForFocus(home_focus,
  { title: "clean up basement", points: 1, repeatable: true }
)

addTaskForFocus(home_focus,
  { title: "pay plumber"}
)

addDeedForFocus(home_focus,
  { title: "examine leak in basement", points: 3, completed_at: 4.days.ago }
)

addDeedForFocus(home_focus,
  { title: "call plumber", points: 3, completed_at: 3.days.ago }
)

addDeedForFocus(home_focus,
  { title: "meet with plumber", points: 1, completed_at: 1.day.ago }
)

#====================== Focus: Communication ==================================#

communication_focus = Focus.find(3)

addTaskForFocus(communication_focus,
  { title: "duolingo Spanish lesson", repeatable: true }
)

addDeedForFocus(communication_focus,
  { title: "duolingo Spanish lesson", repeatable: true }
)

[8.days.ago, 6.days.ago, 4.days.ago, 3.days.ago, 2.days.ago, 2.days.ago, 1.day.ago, 1.day.ago].each do |time|
  addDeedForFocus(health_focus,
    { title: "yoga", completed_at: time }
  )
end

#====================== Focus: Coding =========================================#

code_focus = Focus.find(4)

addTaskForFocus(code_focus,
  { title: "integrate porch", points: 5 }
)

addTaskForFocus(code_focus,
  { title: "get deeds working with mutations", points: 5 }
)

addDeedForFocus(code_focus,
  { title: "read about relay", points: 1 }
)

addDeedForFocus(code_focus,
  { title: "get Apollo mutations working" }
)

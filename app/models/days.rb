class Day
  attr_accessor :start_of_day, :end_of_day

  def initialize(user, start_of_day, end_of_day)
    @user = user
    @start_of_day = start_of_day
    @end_of_day = end_of_day
  end

  def deeds
    @user.deeds.since(start_of_day).until(end_of_day)
  end

  def total_points
    deeds.pluck(:points).sum
  end
end

class Days
  attr_accessor :days

  def initialize(user, since, to=nil)
    @days = []

    since = Chronic.parse(since)
    start_of_day = since || Date.today
    end_of_day = start_of_day + 24.hours
    to = Chronic.parse(to) || Time.now

    while end_of_day < to do
      day = Day.new(user, start_of_day, end_of_day)
      @days.unshift day
      start_of_day = end_of_day
      end_of_day = start_of_day + 24.hours
    end
    # Last partial day:
    day = Day.new(user, start_of_day, to)
    @days.unshift day
  end
end

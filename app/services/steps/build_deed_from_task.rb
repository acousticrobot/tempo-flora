require "porch"

class BuildDeedFromTask
  def call(context)
    context[:deed] = Deed.new(
      title:        context.task.title,
      focus_title:  context.task.focus.title,
      completed_at: Chronic.parse(context.completed_at) || DateTime.now,
      position:     context.task.focus.position,
      points:       context.task.points,
      user:         context.user,
      focus:        context.task.focus,
      consecutive_days: compute_consecutive_days(context)
    )
  end

  private

  def compute_consecutive_days(context)
    completed_at = Chronic.parse(context.completed_at) || DateTime.now
    beginning_of_today = Chronic.parse(context.local_start_of_day) || Date.new
    beginning_of_yesterday = beginning_of_today - 24.hours

    last_of_same_kind = context.user.deeds.until(completed_at).where(title: context.task.title).order_by_completion.first

    if last_of_same_kind.present? &&
       (last_of_same_kind.completed_at > beginning_of_yesterday) &&
       (last_of_same_kind.completed_at < beginning_of_today)
      return last_of_same_kind.consecutive_days + 1
    elsif last_of_same_kind.present? &&
          (last_of_same_kind.completed_at > beginning_of_today)
      return last_of_same_kind.consecutive_days
    end
    return 1
  end
end

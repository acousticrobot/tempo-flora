module ApplicationHelper
  def days_ago(time)
    ago = Date.today - time.to_date

    case ago
    when 0
      "Today"
    when 1
      "Yesterday"
    else
      time.to_date
    end
  end
end

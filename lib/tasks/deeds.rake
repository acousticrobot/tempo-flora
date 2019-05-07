namespace :deeds do

  desc "associate deeds with their focus"
  task :for_focus => :environment do
    Focus.all.each do |focus|
      Deed.where(position: focus.position, user: focus.user).each do |deed|
        deed.update(focus_id: focus.id)
      end
    end
  end

  desc "add sequence to existing deeds"
  task :sequence => :environment do
    last = {}
    Deed.all.order_by_completion.reverse_order.each do |deed|
      if last.has_key? deed.title
        delta = (deed.completed_at.to_date - last[deed.title][:date].to_date)
        if delta >= 1 && delta < 2
          deed.update(consecutive_days: last[deed.title][:days] + 1 )
          puts "updating: #{deed.title} #{deed.consecutive_days}"
        end
      end
      last[deed.title] = { date: deed.completed_at, days: deed.consecutive_days }
    end
  end
end

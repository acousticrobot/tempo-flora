namespace :deeds do

  desc "associate deeds with their focus"
  task :for_focus => :environment do
    Focus.all.each do |focus|
      Deed.where(position: focus.position, user: focus.user).each do |deed|
        deed.update(focus_id: focus.id)
      end
    end
  end
end

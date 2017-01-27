class AddEpisodeToPage < ActiveRecord::Migration[5.0]
  def up
    add_reference(:pages, :episode)
    remove_reference(:episodes, :page)
  end

  def down
    remove_reference(:pages, :episode)
    add_reference(:episodes, :page)
  end
end

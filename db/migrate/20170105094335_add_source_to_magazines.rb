class AddSourceToMagazines < ActiveRecord::Migration[5.0]
  def up
    add_attachment :magazines, :source
  end

  def down
    remove_attachment :magazines, :source
  end
end

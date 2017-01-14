class AddAuthorToEpisodes < ActiveRecord::Migration[5.0]
  def change
    change_table :episodes do |t|
      t.string :author
    end
  end
end

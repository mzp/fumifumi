class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.references :magazine
      t.references :page
      t.string :title
      t.timestamps
    end
  end
end

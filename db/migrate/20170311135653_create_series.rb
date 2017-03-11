class CreateSeries < ActiveRecord::Migration[5.0]
  def change
    create_table :series do |t|
      t.string :title
      t.timestamps
    end

    change_table :magazines do |t|
      t.references :series
    end
  end
end

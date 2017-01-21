class AddFinishedAtToMagazine < ActiveRecord::Migration[5.0]
  def change
    change_table :magazines do |t|
      t.datetime :finished_at, default: '2017-01-01 0:00:00'
    end
  end
end

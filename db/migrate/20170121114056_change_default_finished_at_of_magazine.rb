class ChangeDefaultFinishedAtOfMagazine < ActiveRecord::Migration[5.0]
  def up
    change_column_default :magazines, :finished_at, nil
  end

  def down
    change_column_default :magazines, :finished_at, '2017-01-01 0:00:00'
  end
end

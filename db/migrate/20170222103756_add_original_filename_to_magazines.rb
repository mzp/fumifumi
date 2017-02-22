class AddOriginalFilenameToMagazines < ActiveRecord::Migration[5.0]
  def change
    change_table :magazines do |t|
      t.string :original_filename
    end
  end
end

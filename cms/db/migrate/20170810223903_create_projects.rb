class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.jsonb :content
      t.string :title

      t.timestamps
    end
  end
end

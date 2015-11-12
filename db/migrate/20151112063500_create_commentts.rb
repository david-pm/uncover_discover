class CreateCommentts < ActiveRecord::Migration
  def change
    create_table :commentts do |t|
      t.string :title
      t.string :link
      t.integer :upvotes
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

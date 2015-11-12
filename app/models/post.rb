class Post < ActiveRecord::Base
  has_many :comments

  # jbuilder
  # def as_json(options = {})
  #   super(options.merge(include: :comments))
  # end
end

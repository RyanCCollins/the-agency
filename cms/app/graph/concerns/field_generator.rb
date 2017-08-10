module FieldGenerator
  class CreateField
    def self.one(model:, type:)
      return_type = type
      GraphQL::Field.define do
        type(return_type)
        description("Find a #{model.name} by ID")
        argument(:id, !types.Int, "ID for Record")
        resolve -> (obj, args, ctx) {
          model.find(args["id"])
        }
      end
    end
    def self.all(model:, type:)
      return_type = type
      GraphQL::Field.define do
        type(return_type)
        description("Find a #{model.name}")
        resolve -> (obj, args, ctx) {
          model.all
        }
      end
    end
  end
end
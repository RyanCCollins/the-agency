namespace :graphql do
  desc "Generate the graphql ruby introspection schema.json file"
  task schema: :environment do
    query = GraphQL::Introspection::INTROSPECTION_QUERY

    File.open("./schema.json", "w") do |f|
      f.write(
        JSON.pretty_generate(
          AppSchema.execute(
            query
          )
        )
      )
    end
  end
end
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import connectWithDB from "./Database/db.config";
import { typeDefs } from "./Graphql/Schema";
import { resolvers } from "./Graphql/Resolver";

connectWithDB();

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(graphqlServer, {
    listen: { port: 3000 }
}).then((res) =>
    console.log(`Server is Running on : ${res.url}`)
).catch(err =>
    console.log(err)
)
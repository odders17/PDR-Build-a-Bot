const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const db = require("./config/db");
const { typeDefs, resolvers } = require("./Schemas");
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.port || 3000;

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname + "../Frontend/public")));
  }
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/public/index.html"));
  });
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(
        `use graphQl at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer();

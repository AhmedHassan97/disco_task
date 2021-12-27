import { ApolloServer, gql } from "apollo-server-micro";
import { connectToDatabase } from "../../util/mongodb";

const typeDefs = gql`
  type Query {
    login(username: String, password: String): User
    posts: [Post!]!
  }
  type User {
    username: String
    password: String
    id: String
  }
  type Author {
    name: String
    id: Int
  }
  type Post {
    id: String
    title: String
    author: Author
    content: String
    next: String
    prev: String
    date: String
  }
`;

const resolvers = {
  Query: {
    async login(parent, args, context) {
      const { db } = await connectToDatabase();
      const users = await db
        .collection("users")
        .find({
          username: args.username,
          password: args.password,
        })
        .toArray();

      const editedUser = users.map((user) => {
        return {
          username: user.username,
          password: user.password,
          id: user._id,
        };
      });
      if (editedUser !== []) {
        return editedUser[0];
      }
    },
    async posts(parent, args, context) {
      const { db } = await connectToDatabase();
      const posts = await db.collection("posts").find().toArray();
      const editedPosts = posts.map((post) => {
        return {
          id: post._id,
          title: post.title,
          author: { name: post.author.name, id: post.author.id },
          content: post.content,
          prev: post.prev,
          next: post.next,
          date: post.date,
        };
      });
      console.log(
        "🚀 ~ file: graphql.js ~ line 66 ~ editedPosts ~ editedPosts",
        editedPosts
      );
      return editedPosts;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

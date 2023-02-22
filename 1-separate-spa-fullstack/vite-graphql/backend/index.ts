import { fastify } from "fastify";
import cors from "@fastify/cors";
import mercurius, { IResolvers } from "mercurius";
import mercuriusCodegen, { gql } from "mercurius-codegen";
import { PrismaClient } from "../../../prisma/prisma/generated/client";

const app = fastify();
const db = new PrismaClient();

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;
declare module "mercurius" {
  interface MercuriusContext extends PromiseType<{}> {}
}

const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
  }

  type Query {
    posts: [Post!]!
  }
`;

const resolvers: IResolvers = {
  Query: {
    async posts(root, args, ctx, info) {
      return await db.post.findMany();
    },
  },
};

app.register(mercurius, { schema, resolvers, graphiql: true });
app.register(cors);

mercuriusCodegen(app, { targetPath: "./generated.ts" }).catch(console.error);

app.listen({ port: 5000 }, (error, endpoint) => {
  console.log(`Listening on ${endpoint}`);
});

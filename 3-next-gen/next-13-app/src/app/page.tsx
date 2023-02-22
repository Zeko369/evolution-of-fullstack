import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default async function Home() {
  const posts = await db.post.findMany();

  return (
    <div>
      <h1>Blog posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

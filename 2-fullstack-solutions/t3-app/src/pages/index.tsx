import { type NextPage } from "next";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const posts = trpc.posts.getAll.useQuery();

  return (
    <div style={{ padding: "0 24px" }}>
      <h1>Blog posts</h1>

      {posts.isLoading && <h2>Loading...</h2>}
      {posts.isError && <h2>Error...</h2>}

      {posts.isSuccess && (
        <ul>
          {posts.data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

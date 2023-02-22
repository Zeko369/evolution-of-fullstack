import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql";

const postsQuery = graphql(/* GraphQL */ `
  query postsQuery {
    posts {
      id
      title
      body
    }
  }
`);

function App() {
  const { loading, error, data } = useQuery(postsQuery);

  return (
    <div id="blog">
      <h1>Blog posts</h1>

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {!loading && !error && data && (
        <ul>
          {data.posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

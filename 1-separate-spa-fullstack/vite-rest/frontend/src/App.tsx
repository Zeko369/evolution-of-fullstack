import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [posts, setPosts] = useState<{ id: number; title: string; body: string }[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Blog posts</h1>

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {!isLoading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;

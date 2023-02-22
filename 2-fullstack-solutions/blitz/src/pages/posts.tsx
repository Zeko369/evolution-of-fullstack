import React, { Suspense } from "react"
import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"

import getPosts from "src/posts/queries/getPosts"

const Posts: React.FC = () => {
  const [posts] = useQuery(getPosts, undefined)

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

const PostsPage: BlitzPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default PostsPage

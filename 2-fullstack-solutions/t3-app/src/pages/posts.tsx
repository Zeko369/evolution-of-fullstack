import React from "react";
import type { InferGetServerSidePropsType } from "next";

import { prisma } from "../server/db/client";

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany();

  return {
    props: {
      posts,
      date: new Date(),
    },
  };
};

export default function Posts(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //                            ^?
  const date = props.date;
  //     ^?

  console.log(typeof date);

  return (
    <div>
      <h1>Blog posts</h1>

      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

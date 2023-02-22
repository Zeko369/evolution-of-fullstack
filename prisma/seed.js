const { PrismaClient } = require("./prisma/generated/client/");
const db = new PrismaClient();

async function main() {
  // create 5 posts

  const posts = await db.post.createMany({
    data: [
      { title: "Hello World", body: "This is my first post" },
      { title: "Second Post", body: "This is my second post" },
      { title: "Third Post", body: "This is my third post" },
      { title: "4th Post", body: "This is my 4th post" },
      { title: "last Post", body: "Last post" },
    ],
  });
}

main();

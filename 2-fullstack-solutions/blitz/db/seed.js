const { PrismaClient } = require("@prisma/client")
const db = new PrismaClient({
  datasources: {
    db: {
      url: "file:./db.sqlite",
    },
  },
})

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const items = [
    { title: "Hello World", body: "This is my first post" },
    { title: "Second Post", body: "This is my second post" },
    { title: "Third Post", body: "This is my third post" },
    { title: "4th Post", body: "This is my 4th post" },
    { title: "last Post", body: "Last post" },
  ]

  for (const item of items) {
    await db.post.create({ data: item })
  }
}

seed()

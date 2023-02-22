import { resolver } from "@blitzjs/rpc"
import db from "db"

const getPosts = resolver.pipe(
  // resolver.zod(z.void()), -> zod argument middleware
  // resolver.authorize(), -> authorization middleware
  async () => {
    return db.post.findMany()
  }
)

export default getPosts

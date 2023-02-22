import { router, publicProcedure } from "../trpc";

export const postsRouter = router({
  getAll: publicProcedure
    // .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ ctx }) => {
      return ctx.prisma.post.findMany();
    }),
});

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const iconRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.icon.findMany();
  }),
});
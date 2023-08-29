import { createTRPCRouter } from "~/server/api/trpc";
import { iconRouter } from "./routers/iconRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  icon: iconRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

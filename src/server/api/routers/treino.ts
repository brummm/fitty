import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { treinos } from "../services/data";

export const treinoRouter = createTRPCRouter({
  getCurrent: publicProcedure.query(() => {
    return treinos;
  }),
});

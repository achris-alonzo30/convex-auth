import { v } from "convex/values"
import { mutation, query } from './_generated/server';
import { auth } from "./auth";


export const addTodo = mutation({
    args: {name: v.string(), isCompleted: v.optional(v.boolean())},
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);

        if (userId === null) {
            throw new Error("Client is not authenticated!");
        }

        
    }

})
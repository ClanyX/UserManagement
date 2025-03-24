import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/database";
import { parse } from "cookie";

export const handle: Handle = async ({ event, resolve }) => {
    const cookies = parse(event.request.headers.get("cookie") || "");
    const sessionId = cookies.session;

    if(sessionId){
        const user = db.prepare("SELECT id, username, role FROM users WHERE session_id = ?").get(sessionId) as { id: number, username: string, role: string } | undefined;
        
        if(user){
            event.locals.user = user;
        }
    }
    return await resolve(event);
};

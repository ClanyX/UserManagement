import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/database";
import { parse } from "cookie";

type User = {
    id: number;
    username: string;
    role: string;
};

export const handle: Handle = async ({ event, resolve }) => {
    const cookies = parse(event.request.headers.get('cookie') || '');
    const sessionId = cookies.session;

    if(sessionId){
        const user = db.prepare('SELECT id, username, role FROM users WHERE session_id = ?').get(sessionId) as User || undefined;

        if(user){
            event.locals.user = {
                id: user.id,
                username: user.username,
                role: user.role
            };
        }
    }

    const response = await resolve(event);
    return response;
};
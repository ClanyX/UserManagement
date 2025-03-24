import { json, type RequestEvent } from "@sveltejs/kit";
import { logoutUser } from "$lib/server/auth/logout";

export async function POST({ request }: RequestEvent){
    const cookies = request.headers.get("cookie") || "";
    const sessionId = new URLSearchParams(cookies).get("session");

    if(sessionId){
        logoutUser(sessionId);
    }

    return json({ message: "Logged out" }, { status: 200 });
}

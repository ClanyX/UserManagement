import { json, type RequestEvent } from "@sveltejs/kit";
import { loginUser } from "$lib/server/auth";

export async function POST({ request }: RequestEvent) {
    const { username, password } = await request.json() as { username: string; password: string };
    const session = await loginUser(username, password);

    if (!session) return json({ error: "Invalid username or password" }, { status: 401 });
    
    return json({ session }, { status: 200 });
}
import { json,type RequestEvent } from "@sveltejs/kit";
import { registerUser } from "$lib/server/auth";

export async function POST({ request }: RequestEvent){
    const { username, password } = await request.json() as { username: string; password: string };
    registerUser(username, password);
    return json({ message: "User registered successfully" }, { status: 201 });
}
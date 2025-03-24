import { json, type RequestEvent } from "@sveltejs/kit";
import { registerUser } from "$lib/server/auth/register";

export async function POST({ request }: RequestEvent){
    const { username, password } = await request.json();
    registerUser(username, password);
    return json({ message: "Registration successful" }, { status: 201 });
}
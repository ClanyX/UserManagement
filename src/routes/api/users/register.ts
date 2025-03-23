import { registerUser } from "$lib/server/auth";
import { json, type RequestEvent } from "@sveltejs/kit";
import { db } from "$lib/server/database";

export async function POST({ request }: RequestEvent) {
    const { username, password, role } = await request.json();

    const existingUser = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
    if (existingUser) {
        return json({ error: "Username is already taken" }, { status: 400 });
    }

    try{
        await registerUser(username, password, role || 'user');
        return json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        return json({ error: 'Something went wrong during registration' }, { status: 500 });
    }
}
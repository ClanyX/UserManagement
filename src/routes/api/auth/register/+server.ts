import { json,type RequestEvent } from "@sveltejs/kit";
import { registerUser } from "$lib/server/auth";
import bcrypt from "bcrypt";

export async function POST({ request }: RequestEvent){
    const { username, password } = await request.json() as { username: string; password: string };
    const hashedPassword = await bcrypt.hash(password, 10);
    registerUser(username, hashedPassword);
    return json({ message: "User registered successfully" }, { status: 201 });
}
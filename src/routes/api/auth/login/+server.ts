import { json, type RequestEvent } from "@sveltejs/kit";
import { loginUser } from "$lib/server/auth/login";

export async function POST({ request }: RequestEvent){
    const { username, password } = await request.json();
    const session = loginUser(username, password);

    if(!session){
        return json({ error: "Invalid username or password"}, { status: 401});
    }

    return json({ message: "Login successful" }, {
        status: 200,
        headers: {
            "Set-Cookie": `session=${session}; HttpOnly; Path=/; Secure;`
        }
    });
}
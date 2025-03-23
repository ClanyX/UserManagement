import { authenticateUser } from "$lib/server/auth";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function POST({ request, cookies }: RequestEvent) {
    const { username, password } = await request.json();
    const user = await authenticateUser(username, password);

    if(!user || user === true){
        return json({ error: 'Invalid credentials' }, { status: 401 });
    }

    cookies.set('session', JSON.stringify({ username: user.username, role: user.role }), {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24
    });

    return json({ message: 'Login successful', role: user.role });
}
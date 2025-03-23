import { json, type RequestEvent } from '@sveltejs/kit';

export async function POST({ cookies }: RequestEvent) {
    cookies.set('session', '', { path: '/', maxAge: 0 });
    return json({ message: 'Logged out' });
}

import bcrypt from 'bcrypt';
import { db } from './database';

export async function registerUser(username: string, password: string): Promise<void>{
    const hashedPassword = await bcrypt.hash(password, 10);
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    stmt.run(username, hashedPassword);
}

export async function authenticateUser(username: string, password: string): Promise<boolean | { username: string }>{
    const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const user = stmt.get(username) as { username: string, password: string } | undefined;

    if(!user) return false;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? { username: user.username } : false;
}
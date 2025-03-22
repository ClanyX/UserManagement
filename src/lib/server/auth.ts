import bcrypt from 'bcrypt';
import { db } from './database';

export async function registerUser(username: string, password: string, role: string = 'user'): Promise<void>{
    const hashedPassword = await bcrypt.hash(password, 10);
    const stmt = db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');
    stmt.run(username, hashedPassword, role);
}

export async function authenticateUser(username: string, password: string): Promise<boolean | { username: string; role: string }>{
    const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const user = stmt.get(username) as { username: string, password: string, role: string } | undefined;

    if(!user) return false;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? { username: user.username, role: user.role } : false;
}
import { db } from "./database";
import { randomUUID } from "crypto"

export function createSession(userId: string){
    const sessionId = randomUUID();
    db.prepare("UPDATE users SET session_id = ? WHERE id = ?").run(sessionId, userId);
    return sessionId;
}

export function destroySession(sessionId: string){
    db.prepare("UPDATE users SET session_id = NULL WHERE session_id = ?").run(sessionId);
}
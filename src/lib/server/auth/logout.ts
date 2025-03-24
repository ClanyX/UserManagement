import { destroySession } from "../session";

export function logoutUser(sessionId: string){
    destroySession(sessionId);
}
import { db } from "../database";
import { createSession } from "../session";
import bcrypt from "bcrypt";

type User = {
    id: number;
    username: string;
    password: string;
};

export function loginUser(username: string, password: string){
    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as User | undefined;

    if(!user || !bcrypt.compareSync(password, user.password)){
        return null;
    }

    return createSession(user.id.toString());
}
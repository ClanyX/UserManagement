import { db } from "../database";
import bcrypt from "bcrypt";

export function registerUser(username: string, password: string){
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run(username, hashedPassword);
}
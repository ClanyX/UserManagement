import { db } from "./database";
import bcrypt from "bcrypt";

type User = {
  id: number;
  username: string;
  password: string;
  role: string;
};

export async function loginUser(username: string, password: string){
    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as User | undefined;

    console.log(password, user?.password);

    if(!user || !bcrypt.compareSync(password, user.password)) return null;

    return user;
}

export async function registerUser(username: string, password: string){
  db.prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)").run(username, password, "user");
}
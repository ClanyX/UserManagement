import { db } from "./database";

type User = {
  id: number;
  username: string;
  password: string;
  role: string;
};

export async function loginUser(username: string, password: string){
    const user = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?").get(username, password) as User | undefined;

    if(!user) return null;

    return user;
}

export async function registerUser(username: string, password: string){
  db.prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)").run(username, password, "user");
}
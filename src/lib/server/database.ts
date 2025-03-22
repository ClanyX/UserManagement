import Database from 'better-sqlite3';

export const db = new Database('src/lib/server/database.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXITS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT CHECK(role IN ('admin', 'user')) DEFAULT 'user'
    )
`);
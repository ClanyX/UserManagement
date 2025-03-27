import Database from 'better-sqlite3';

export const db = new Database('src/lib/server/database.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT CHECK(role IN ('admin', 'user')) DEFAULT 'user'
    )
`);
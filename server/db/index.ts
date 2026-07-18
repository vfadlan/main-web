import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db: Awaited<ReturnType<typeof open>> | null = null;

export async function useDb() {
    if (db) return db;

    db = await open({
        filename: "./data/tracking.db",
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS tracking_pixels (
            id TEXT PRIMARY KEY,
            email TEXT NOT NULL,
            name TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            opened_at DATETIME
        );
    `);

    return db;
}
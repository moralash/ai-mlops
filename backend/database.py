import sqlite3
from datetime import datetime

DB_NAME = "sentiment.db"

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create predictions table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS predictions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        sentiment TEXT NOT NULL,
        confidence REAL NOT NULL,
        positive_score REAL,
        negative_score REAL,
        timestamp TEXT NOT NULL
    )
    ''')
    
    conn.commit()
    conn.close()
    print(f"Database {DB_NAME} initialized successfully.")

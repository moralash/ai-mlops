import pandas as pd
import random
from database import init_db, get_db_connection, DB_NAME
from datetime import datetime, timedelta

# Synthetic Data Generation for Training
def generate_training_data():
    print("Generating synthetic training data...")
    
    positive_templates = [
        "I love this {noun}!", "The {noun} is amazing.", "Great {noun}.", "Best {noun} ever.",
        "Highly recommend this {noun}.", "So happy with the {noun}.", "Excellent quality.",
        "Works perfectly.", "Five stars!", "Incredible experience."
    ]
    
    negative_templates = [
        "I hate this {noun}.", "The {noun} is terrible.", "Worst {noun} ever.", "Do not buy this {noun}.",
        "Very disappointed with the {noun}.", "Waste of money.", "Broken on arrival.",
        "Poor quality.", "Does not work.", "One star."
    ]
    
    nouns = ["product", "service", "app", "experience", "item", "purchase", "support", "quality", "interface", "performance"]
    
    data = []
    
    # Generate 500 positive samples
    for _ in range(500):
        template = random.choice(positive_templates)
        noun = random.choice(nouns)
        text = template.format(noun=noun)
        data.append({"text": text, "sentiment": 1}) # 1 for positive
        
    # Generate 500 negative samples
    for _ in range(500):
        template = random.choice(negative_templates)
        noun = random.choice(nouns)
        text = template.format(noun=noun)
        data.append({"text": text, "sentiment": 0}) # 0 for negative
        
    df = pd.DataFrame(data)
    # Shuffle
    df = df.sample(frac=1).reset_index(drop=True)
    
    df.to_csv("sentiment_dataset.csv", index=False)
    print("Saved sentiment_dataset.csv with 1000 samples.")

# Seed Database with History
def seed_database():
    print("Seeding database with history...")
    init_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Check if empty
    cursor.execute("SELECT count(*) FROM predictions")
    if cursor.fetchone()[0] > 0:
        print("Database already contains data. Skipping seed.")
        conn.close()
        return

    history_items = [
        ("This is fantastic!", "positive", 0.95, 0.95, 0.05),
        ("Not what I expected, prompts are bad.", "negative", 0.82, 0.18, 0.82),
        ("Pretty average experience overall.", "positive", 0.55, 0.55, 0.45),
        ("Super fast delivery and great support.", "positive", 0.98, 0.98, 0.02),
        ("The UI is confusing and buggy.", "negative", 0.89, 0.11, 0.89)
    ]
    
    now = datetime.now()
    
    for i, item in enumerate(history_items):
        text, sentiment, conf, pos, neg = item
        # Stagger timestamps
        ts = (now - timedelta(minutes=i*15)).isoformat()
        
        cursor.execute('''
            INSERT INTO predictions (text, sentiment, confidence, positive_score, negative_score, timestamp)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (text, sentiment, conf, pos, neg, ts))
        
    conn.commit()
    conn.close()
    print("Database seeded with 5 initial predictions.")

if __name__ == "__main__":
    generate_training_data()
    seed_database()

import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

MODEL_FILE = "sentiment_v1.pkl"
VECTORIZER_FILE = "vectorizer_v1.pkl"
DATA_FILE = "sentiment_dataset.csv"

def train_model():
    print("Loading data...")
    try:
        df = pd.read_csv(DATA_FILE)
    except FileNotFoundError:
        print(f"Error: {DATA_FILE} not found. Run generate_data.py first.")
        return

    X = df['text']
    y = df['sentiment']

    print(f"Training on {len(df)} samples...")
    
    # Vectorizer
    vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
    X_vec = vectorizer.fit_transform(X)
    
    # Model
    model = LogisticRegression(solver='liblinear')
    model.fit(X_vec, y)
    
    # Evaluate (simple)
    score = model.score(X_vec, y)
    print(f"Model Accuracy (Training): {score:.4f}")
    
    # Save
    print("Saving model artifacts...")
    joblib.dump(model, MODEL_FILE)
    joblib.dump(vectorizer, VECTORIZER_FILE)
    print(f"Saved {MODEL_FILE} and {VECTORIZER_FILE}")

if __name__ == "__main__":
    train_model()

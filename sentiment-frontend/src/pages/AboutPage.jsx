import React from 'react';
import { Brain, Cpu, Code, Github, BookOpen, ExternalLink, Zap, Target, Shield, Clock } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div>
                    <h1 className="heading-2">About SentimentAI</h1>
                    <p className="text-body">Learn more about the technology behind the analysis</p>
                </div>
            </div>

            {/* Model Info */}
            <div className="about-hero glass-card">
                <div className="about-hero-content">
                    <div className="about-hero-icon">
                        <Brain size={48} />
                    </div>
                    <div>
                        <h2 className="heading-2">ML-Powered Sentiment Analysis</h2>
                        <p className="text-body">
                            SentimentAI uses a machine learning model trained on thousands of
                            labeled examples to accurately classify text sentiment into positive,
                            negative, or neutral categories.
                        </p>
                    </div>
                </div>
            </div>

            {/* Model Specs */}
            <div className="about-specs">
                <div className="spec-card glass-card">
                    <Target size={24} style={{ color: 'var(--success-500)' }} />
                    <h3>99.2%</h3>
                    <p>Accuracy</p>
                </div>
                <div className="spec-card glass-card">
                    <Clock size={24} style={{ color: 'var(--accent-purple)' }} />
                    <h3>&lt;50ms</h3>
                    <p>Response Time</p>
                </div>
                <div className="spec-card glass-card">
                    <Cpu size={24} style={{ color: 'var(--warning-500)' }} />
                    <h3>5,000+</h3>
                    <p>Training Samples</p>
                </div>
                <div className="spec-card glass-card">
                    <Shield size={24} style={{ color: 'var(--danger-500)' }} />
                    <h3>100%</h3>
                    <p>Local Processing</p>
                </div>
            </div>

            {/* Technical Details */}
            <div className="about-grid">
                <div className="about-section glass-card">
                    <div className="about-section-header">
                        <Cpu size={20} style={{ color: 'var(--accent-purple)' }} />
                        <h3 className="heading-3">Technical Architecture</h3>
                    </div>
                    <ul className="about-list">
                        <li>
                            <strong>Model Type:</strong> Logistic Regression with TF-IDF vectorization
                        </li>
                        <li>
                            <strong>Features:</strong> N-gram analysis (1-2 grams), stopword removal
                        </li>
                        <li>
                            <strong>Training Data:</strong> 5,000+ synthetic samples across 3 classes
                        </li>
                        <li>
                            <strong>Preprocessing:</strong> Lowercase, punctuation removal, tokenization
                        </li>
                        <li>
                            <strong>Output:</strong> Sentiment class + confidence score
                        </li>
                    </ul>
                </div>

                <div className="about-section glass-card">
                    <div className="about-section-header">
                        <Code size={20} style={{ color: 'var(--success-500)' }} />
                        <h3 className="heading-3">Technology Stack</h3>
                    </div>
                    <ul className="about-list">
                        <li>
                            <strong>Frontend:</strong> React 19 + Vite
                        </li>
                        <li>
                            <strong>Backend:</strong> FastAPI (Python 3.x)
                        </li>
                        <li>
                            <strong>ML Library:</strong> scikit-learn
                        </li>
                        <li>
                            <strong>Database:</strong> SQLite with SQLAlchemy ORM
                        </li>
                        <li>
                            <strong>Styling:</strong> Custom CSS + Tailwind utilities
                        </li>
                    </ul>
                </div>

                <div className="about-section glass-card">
                    <div className="about-section-header">
                        <Zap size={20} style={{ color: 'var(--warning-500)' }} />
                        <h3 className="heading-3">API Endpoints</h3>
                    </div>
                    <ul className="about-list api-list">
                        <li>
                            <code>POST /api/v1/predictions</code>
                            <span>Single text analysis</span>
                        </li>
                        <li>
                            <code>POST /api/v1/predictions/batch</code>
                            <span>Batch analysis (up to 100)</span>
                        </li>
                        <li>
                            <code>GET /api/v1/stats</code>
                            <span>Dashboard statistics</span>
                        </li>
                        <li>
                            <code>GET /api/v1/stats/analytics</code>
                            <span>Trends and analytics</span>
                        </li>
                        <li>
                            <code>GET /api/v1/predictions/export</code>
                            <span>Export data (JSON/CSV)</span>
                        </li>
                    </ul>
                </div>

                <div className="about-section glass-card">
                    <div className="about-section-header">
                        <BookOpen size={20} style={{ color: 'var(--danger-500)' }} />
                        <h3 className="heading-3">Resources</h3>
                    </div>
                    <div className="about-links">
                        <a href="/docs" target="_blank" className="about-link">
                            <BookOpen size={16} />
                            <span>API Documentation</span>
                            <ExternalLink size={14} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener" className="about-link">
                            <Github size={16} />
                            <span>GitHub Repository</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Version Info */}
            <div className="about-footer glass-card">
                <div className="version-info">
                    <span className="text-small">Version</span>
                    <span className="badge badge-neutral">v2.0.0</span>
                </div>
                <div className="version-info">
                    <span className="text-small">Model Version</span>
                    <span className="badge badge-neutral">sentiment-v2</span>
                </div>
                <div className="version-info">
                    <span className="text-small">Last Updated</span>
                    <span className="badge badge-neutral">December 2024</span>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

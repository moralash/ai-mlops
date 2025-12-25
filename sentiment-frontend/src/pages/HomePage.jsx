import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Zap,
    BarChart3,
    Shield,
    FileText,
    TrendingUp,
    Play,
    Star
} from 'lucide-react';

const HomePage = () => {
    const features = [
        {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Get instant sentiment analysis results in under 50ms with our optimized ML pipeline.',
            gradient: 'from-yellow-400 to-orange-500'
        },
        {
            icon: <Shield size={24} />,
            title: '99.2% Accuracy',
            description: 'State-of-the-art model trained on 5000+ samples for reliable predictions.',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'Rich Analytics',
            description: 'Visualize trends, word frequencies, and sentiment distribution over time.',
            gradient: 'from-blue-400 to-cyan-500'
        },
        {
            icon: <FileText size={24} />,
            title: 'Batch Processing',
            description: 'Analyze hundreds of texts at once with CSV upload and bulk processing.',
            gradient: 'from-purple-400 to-pink-500'
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Trend Analysis',
            description: 'Track sentiment changes over time with beautiful interactive charts.',
            gradient: 'from-pink-400 to-rose-500'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'AI-Powered',
            description: 'Advanced NLP algorithms understand context, sarcasm, and nuance.',
            gradient: 'from-indigo-400 to-purple-500'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.section
                className="hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-content">
                    {/* Badge */}
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="badge-dot"></span>
                        <span>Powered by Machine Learning</span>
                        <Sparkles size={14} />
                    </motion.div>

                    {/* Main Title with Typing Effect */}
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <span className="hero-title-line">Understand the</span>
                        <span className="hero-title-gradient">
                            <TypeAnimation
                                sequence={[
                                    'Emotions',
                                    2000,
                                    'Feelings',
                                    2000,
                                    'Sentiments',
                                    2000,
                                    'Opinions',
                                    2000,
                                    'Vibes',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                        <span className="hero-title-line">Behind Every Word</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Real-time sentiment analysis powered by advanced machine learning.
                        Analyze customer feedback, reviews, and social media with enterprise-grade accuracy.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link to="/analyze" className="btn btn-primary btn-lg">
                            <Play size={18} />
                            Start Analyzing
                            <ArrowRight size={18} />
                        </Link>
                        <Link to="/dashboard" className="btn btn-glow btn-lg">
                            View Dashboard
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <div className="hero-stat">
                            <span className="hero-stat-value">99.2%</span>
                            <span className="hero-stat-label">Accuracy</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">&lt;50ms</span>
                            <span className="hero-stat-label">Response</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">5K+</span>
                            <span className="hero-stat-label">Training Data</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual - Demo Card */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                >
                    <div className="demo-card glass-card">
                        <div className="demo-card-header">
                            <div className="demo-card-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="demo-card-title">Live Demo</span>
                        </div>
                        <div className="demo-input">
                            <span className="demo-label">Input Text</span>
                            <p>"This product exceeded all my expectations! Absolutely love it."</p>
                        </div>
                        <motion.div
                            className="demo-result positive"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        >
                            <div className="demo-result-icon">
                                <span>😊</span>
                            </div>
                            <div className="demo-result-content">
                                <span className="demo-result-label">Positive Sentiment</span>
                                <div className="demo-result-bar">
                                    <motion.div
                                        className="demo-result-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: '94%' }}
                                        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                                <span className="demo-result-confidence">94% Confidence</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Trusted By Section */}
            <motion.section
                className="trusted-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="trusted-label">Trusted by developers and teams worldwide</p>
                <div className="trusted-logos">
                    {['⚡ Fast API', '🔬 scikit-learn', '⚛️ React', '🎨 Modern UI', '📊 Analytics'].map((item, i) => (
                        <motion.span
                            key={i}
                            className="trusted-logo"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </motion.section>

            {/* Features Section */}
            <section className="features-section">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">Features</span>
                    <h2 className="section-title">Everything you need for sentiment analysis</h2>
                    <p className="section-subtitle">
                        Powerful features to help you understand and analyze text data at scale
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className={`feature-icon bg-gradient-to-br ${feature.gradient}`}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="cta-section glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="cta-glow"></div>
                <div className="cta-content">
                    <h2>Ready to get started?</h2>
                    <p>Start analyzing sentiment in seconds. No credit card required.</p>
                    <div className="cta-actions">
                        <Link to="/analyze" className="btn btn-primary btn-lg">
                            Start Free Analysis
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;

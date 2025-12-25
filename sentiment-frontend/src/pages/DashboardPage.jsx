import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, TrendingUp, TrendingDown, Zap, ArrowRight, Clock, Target } from 'lucide-react';

const DashboardPage = ({ stats, history, onAnalyze, loading }) => {
    return (
        <div className="dashboard-page">
            {/* Welcome Section */}
            <div className="dashboard-welcome">
                <div>
                    <h1 className="heading-2">Welcome back! 👋</h1>
                    <p className="text-body">Here's an overview of your sentiment analysis activity</p>
                </div>
                <Link to="/analyze" className="btn btn-primary">
                    <Zap size={16} />
                    New Analysis
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="dashboard-stats">
                <div className="stat-card glass-card">
                    <div className="stat-icon stat-icon-primary">
                        <Activity size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-value">{stats?.total_predictions?.toLocaleString() ?? '-'}</p>
                        <p className="stat-label">Total Analyses</p>
                    </div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-icon stat-icon-success">
                        <TrendingUp size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-value" style={{ color: 'var(--success-600)' }}>
                            {stats?.sentiment_distribution?.positive ?? '-'}
                        </p>
                        <p className="stat-label">Positive</p>
                    </div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-icon stat-icon-danger">
                        <TrendingDown size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-value" style={{ color: 'var(--danger-600)' }}>
                            {stats?.sentiment_distribution?.negative ?? '-'}
                        </p>
                        <p className="stat-label">Negative</p>
                    </div>
                </div>
                <div className="stat-card glass-card">
                    <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--warning-600)' }}>
                        <Target size={24} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-value">
                            {stats?.avg_confidence ? `${(stats.avg_confidence * 100).toFixed(1)}%` : '-'}
                        </p>
                        <p className="stat-label">Avg Confidence</p>
                    </div>
                </div>
            </div>

            {/* Quick Analysis & Recent Activity */}
            <div className="dashboard-grid">
                {/* Quick Analysis */}
                <div className="glass-card quick-analysis-card">
                    <h3 className="heading-3">Quick Analysis</h3>
                    <p className="text-small" style={{ marginBottom: '1rem' }}>
                        Enter text below for instant sentiment analysis
                    </p>
                    <QuickAnalysisForm onAnalyze={onAnalyze} loading={loading} />
                </div>

                {/* Recent Activity */}
                <div className="glass-card recent-activity-card">
                    <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                        <h3 className="heading-3">Recent Activity</h3>
                        <Link to="/analyze" className="text-small" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>
                            View all <ArrowRight size={14} style={{ verticalAlign: 'middle' }} />
                        </Link>
                    </div>
                    {history && history.length > 0 ? (
                        <div className="activity-list">
                            {history.slice(0, 5).map((item, index) => (
                                <div key={index} className="activity-item">
                                    <div className={`activity-badge badge-${item.sentiment}`}>
                                        {item.sentiment === 'positive' ? '😊' : item.sentiment === 'negative' ? '😞' : '😐'}
                                    </div>
                                    <div className="activity-content">
                                        <p className="activity-text">{item.text?.substring(0, 50)}...</p>
                                        <div className="activity-meta">
                                            <span className={`badge badge-${item.sentiment}`}>{item.sentiment}</span>
                                            <span className="text-small">
                                                <Clock size={12} /> {new Date(item.timestamp).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p className="text-muted">No recent activity</p>
                            <Link to="/analyze" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                                Start your first analysis
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Links */}
            <div className="dashboard-links">
                <Link to="/analytics" className="quick-link-card glass-card">
                    <TrendingUp size={24} style={{ color: 'var(--accent-purple)' }} />
                    <div>
                        <h4>View Analytics</h4>
                        <p className="text-small">See sentiment trends and insights</p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-muted)' }} />
                </Link>
                <Link to="/settings" className="quick-link-card glass-card">
                    <Zap size={24} style={{ color: 'var(--warning-500)' }} />
                    <div>
                        <h4>Settings</h4>
                        <p className="text-small">Configure your preferences</p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-muted)' }} />
                </Link>
            </div>
        </div>
    );
};

// Quick Analysis Form Component
const QuickAnalysisForm = ({ onAnalyze, loading }) => {
    const [text, setText] = React.useState('');
    const [result, setResult] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim() && onAnalyze) {
            const res = await onAnalyze(text);
            setResult(res);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="input textarea"
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                style={{ marginBottom: '1rem' }}
            />
            <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={!text.trim() || loading}
            >
                {loading ? 'Analyzing...' : 'Analyze'}
            </button>
            {result && (
                <div className={`quick-result badge badge-${result.sentiment}`} style={{ marginTop: '1rem', padding: '0.75rem', display: 'block', textAlign: 'center' }}>
                    {result.sentiment.toUpperCase()} - {(result.confidence * 100).toFixed(1)}% confidence
                </div>
            )}
        </form>
    );
};

export default DashboardPage;

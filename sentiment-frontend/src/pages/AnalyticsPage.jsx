import React from 'react';
import AnalyticsChart from '../components/AnalyticsChart';
import { TrendingUp, Calendar, Download, RefreshCw } from 'lucide-react';

const AnalyticsPage = ({ analytics, onRefresh, onExport }) => {
    return (
        <div className="analytics-page">
            <div className="page-header">
                <div>
                    <h1 className="heading-2">Analytics Dashboard</h1>
                    <p className="text-body">Visualize sentiment trends and insights</p>
                </div>
                <div className="page-actions">
                    <button className="btn btn-secondary" onClick={onRefresh}>
                        <RefreshCw size={16} />
                        Refresh
                    </button>
                    <div className="dropdown-container">
                        <button
                            className="btn btn-secondary"
                            onClick={() => document.getElementById('analytics-export-menu').classList.toggle('show')}
                        >
                            <Download size={16} />
                            Export
                        </button>
                        <div id="analytics-export-menu" className="dropdown-menu glass-card">
                            <button onClick={() => { onExport?.('json'); document.getElementById('analytics-export-menu').classList.remove('show'); }}>
                                Export JSON
                            </button>
                            <button onClick={() => { onExport?.('csv'); document.getElementById('analytics-export-menu').classList.remove('show'); }}>
                                Export CSV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Date Filter */}
            <div className="analytics-filters glass-card">
                <div className="filter-group">
                    <Calendar size={16} />
                    <span className="text-small">Time Range:</span>
                    <select className="filter-select">
                        <option value="7">Last 7 days</option>
                        <option value="14">Last 14 days</option>
                        <option value="30">Last 30 days</option>
                        <option value="90">Last 90 days</option>
                    </select>
                </div>
            </div>

            {/* Analytics Charts */}
            <div className="analytics-content">
                <AnalyticsChart analytics={analytics} />
            </div>
        </div>
    );
};

export default AnalyticsPage;

import React from 'react';
import { Settings, Moon, Sun, Bell, Database, Palette, Globe, Save } from 'lucide-react';

const SettingsPage = ({ theme, onThemeToggle }) => {
    return (
        <div className="settings-page">
            <div className="page-header">
                <div>
                    <h1 className="heading-2">Settings</h1>
                    <p className="text-body">Configure your preferences and application settings</p>
                </div>
            </div>

            <div className="settings-grid">
                {/* Appearance Settings */}
                <div className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Palette size={20} style={{ color: 'var(--accent-purple)' }} />
                        <h3 className="heading-3">Appearance</h3>
                    </div>
                    <div className="settings-items">
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Theme</label>
                                <p className="text-small">Choose between light and dark mode</p>
                            </div>
                            <button
                                className="btn btn-secondary btn-icon"
                                onClick={onThemeToggle}
                                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            >
                                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                            </button>
                        </div>
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Current Theme</label>
                                <p className="text-small">Active theme preference</p>
                            </div>
                            <span className="badge badge-neutral" style={{ textTransform: 'capitalize' }}>
                                {theme} Mode
                            </span>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Bell size={20} style={{ color: 'var(--warning-500)' }} />
                        <h3 className="heading-3">Notifications</h3>
                    </div>
                    <div className="settings-items">
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Toast Notifications</label>
                                <p className="text-small">Show notifications for analysis results</p>
                            </div>
                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Sound Effects</label>
                                <p className="text-small">Play sounds on completion</p>
                            </div>
                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* API Settings */}
                <div className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Globe size={20} style={{ color: 'var(--success-500)' }} />
                        <h3 className="heading-3">API Configuration</h3>
                    </div>
                    <div className="settings-items">
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>API Endpoint</label>
                                <p className="text-small">Backend server URL</p>
                            </div>
                            <input
                                type="text"
                                className="input"
                                defaultValue="http://localhost:8000/api/v1"
                                style={{ maxWidth: '300px' }}
                            />
                        </div>
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Request Timeout</label>
                                <p className="text-small">Maximum wait time for API responses</p>
                            </div>
                            <select className="input" style={{ maxWidth: '150px' }}>
                                <option value="5000">5 seconds</option>
                                <option value="10000">10 seconds</option>
                                <option value="30000" selected>30 seconds</option>
                                <option value="60000">60 seconds</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Data Settings */}
                <div className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Database size={20} style={{ color: 'var(--danger-500)' }} />
                        <h3 className="heading-3">Data & Storage</h3>
                    </div>
                    <div className="settings-items">
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>History Limit</label>
                                <p className="text-small">Maximum number of items in history</p>
                            </div>
                            <select className="input" style={{ maxWidth: '150px' }}>
                                <option value="10">10 items</option>
                                <option value="25">25 items</option>
                                <option value="50" selected>50 items</option>
                                <option value="100">100 items</option>
                            </select>
                        </div>
                        <div className="settings-item">
                            <div className="settings-item-content">
                                <label>Auto-save Results</label>
                                <p className="text-small">Automatically save analysis results locally</p>
                            </div>
                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="settings-footer">
                <button className="btn btn-primary btn-lg">
                    <Save size={18} />
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;

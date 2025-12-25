import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Home,
    LayoutDashboard,
    Sparkles,
    BarChart3,
    Settings,
    Info,
    ChevronLeft,
    ChevronRight,
    Moon,
    Sun,
    Wifi,
    WifiOff,
    Menu,
    X
} from 'lucide-react';

const Sidebar = ({
    theme,
    onThemeToggle,
    isConnected,
    isCollapsed,
    onToggleCollapse,
    isMobileOpen,
    onMobileToggle
}) => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/analyze', icon: Sparkles, label: 'Analyze' },
        { path: '/analytics', icon: BarChart3, label: 'Analytics' },
        { path: '/settings', icon: Settings, label: 'Settings' },
        { path: '/about', icon: Info, label: 'About' },
    ];

    // Close mobile menu when navigating
    const handleNavClick = () => {
        if (isMobileOpen) {
            onMobileToggle();
        }
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                className="mobile-menu-btn"
                onClick={onMobileToggle}
                aria-label="Toggle menu"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="mobile-overlay"
                    onClick={onMobileToggle}
                />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
                {/* Logo Section */}
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src="/logo.svg" alt="SentimentAI" className="logo-icon" />
                        {!isCollapsed && (
                            <div className="logo-text">
                                <span className="logo-title">SentimentAI</span>
                                <span className="logo-version">v2.0</span>
                            </div>
                        )}
                    </div>
                    <button
                        className="sidebar-toggle desktop-only"
                        onClick={onToggleCollapse}
                        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                    {/* Mobile close button */}
                    <button
                        className="sidebar-toggle mobile-only"
                        onClick={onMobileToggle}
                        title="Close menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="sidebar-nav">
                    {navItems.map(({ path, icon: Icon, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? 'active' : ''}`
                            }
                            title={isCollapsed ? label : undefined}
                            onClick={handleNavClick}
                        >
                            <Icon size={20} />
                            {!isCollapsed && <span>{label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="sidebar-footer">
                    {/* Connection Status */}
                    <div className={`sidebar-status ${isConnected ? 'connected' : 'disconnected'}`} title={isConnected ? 'Connected to API' : 'Offline'}>
                        {isConnected ? <Wifi size={16} /> : <WifiOff size={16} />}
                        {!isCollapsed && <span>{isConnected ? 'Connected' : 'Offline'}</span>}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        className="sidebar-theme-toggle"
                        onClick={onThemeToggle}
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        {!isCollapsed && <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

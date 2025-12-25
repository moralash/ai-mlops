import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

// Components
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import {
  HomePage,
  DashboardPage,
  AnalyzePage,
  AnalyticsPage,
  SettingsPage,
  AboutPage
} from './pages';

// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

function App() {
  // State
  const [stats, setStats] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [toast, setToast] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const locationUsedVar = location; // prevent unused var warning if location was only used here


  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fetch stats
  const fetchStats = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      setStats({
        total_predictions: response.data.total_predictions,
        sentiment_distribution: response.data.sentiment_distribution,
        avg_confidence: response.data.avg_confidence
      });
      setHistory(response.data.recent_predictions);
      setIsConnected(true);
    } catch (error) {
      console.error("Error fetching stats:", error);
      setIsConnected(false);
    }
  }, []);

  // Fetch analytics
  const fetchAnalytics = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/stats/analytics?days=7`);
      setAnalytics(response.data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  }, []);

  // Initial data load
  useEffect(() => {
    fetchStats();
    fetchAnalytics();
  }, [fetchStats, fetchAnalytics]);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Handle single analysis
  const handleAnalyze = async (text) => {
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(`${API_URL}/predictions`, { text });

      // Smooth transition delay
      await new Promise(resolve => setTimeout(resolve, 400));

      setResult(response.data);
      fetchStats();
      fetchAnalytics();

      showToast(`Analysis complete: ${response.data.sentiment.toUpperCase()}`, 'success');
      return response.data;
    } catch (error) {
      console.error("Analysis failed:", error);
      showToast(
        error.response?.data?.detail || "Analysis failed. Ensure backend is running.",
        'error'
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Handle batch analysis
  const handleBatchAnalyze = async (texts) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/predictions/batch`, { texts });

      fetchStats();
      fetchAnalytics();

      showToast(`Batch complete: ${response.data.total_processed} texts analyzed`, 'success');
      return response.data;
    } catch (error) {
      console.error("Batch analysis failed:", error);
      showToast(
        error.response?.data?.detail || "Batch analysis failed.",
        'error'
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Handle export
  const handleExport = async (format = 'json') => {
    try {
      const response = await axios.get(`${API_URL}/predictions/export`, {
        params: { format, limit: 1000 },
        responseType: format === 'csv' ? 'blob' : 'json'
      });

      if (format === 'csv') {
        const blob = new Blob([response.data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sentiment_predictions.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        const blob = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sentiment_predictions.json';
        a.click();
        window.URL.revokeObjectURL(url);
      }

      showToast(`Exported ${format.toUpperCase()} successfully`, 'success');
    } catch (error) {
      console.error("Export failed:", error);
      showToast("Export failed", 'error');
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileOpen(prev => !prev);
  };

  // Refresh data
  const handleRefresh = () => {
    fetchStats();
    fetchAnalytics();
    showToast('Data refreshed', 'success');
  };

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* App Layout */}
      <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Sidebar */}
        <Sidebar
          theme={theme}
          onThemeToggle={toggleTheme}
          isConnected={isConnected}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={toggleSidebar}
          isMobileOpen={isMobileOpen}
          onMobileToggle={toggleMobileMenu}
        />

        {/* Main Content */}
        <div className="app-main">
          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/dashboard"
                element={
                  <DashboardPage
                    stats={stats}
                    history={history}
                    onAnalyze={handleAnalyze}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/analyze"
                element={
                  <AnalyzePage
                    onAnalyze={handleAnalyze}
                    onBatchAnalyze={handleBatchAnalyze}
                    loading={loading}
                    result={result}
                    history={history}
                  />
                }
              />
              <Route
                path="/analytics"
                element={
                  <AnalyticsPage
                    analytics={analytics}
                    onRefresh={handleRefresh}
                    onExport={handleExport}
                  />
                }
              />
              <Route
                path="/settings"
                element={
                  <SettingsPage
                    theme={theme}
                    onThemeToggle={toggleTheme}
                  />
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

export default App;

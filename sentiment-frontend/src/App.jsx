import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';
import StatsDashboard from './components/StatsDashboard';
import AnalysisInput from './components/AnalysisInput';
import ResultsDisplay from './components/ResultsDisplay';
import HistoryList from './components/HistoryList';

const API_URL = 'http://localhost:8000/api';

function App() {
  const [stats, setStats] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      setStats({
        total_predictions: response.data.total_predictions,
        sentiment_distribution: response.data.sentiment_distribution
      });
      setHistory(response.data.recent_predictions);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleAnalyze = async (text) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post(`${API_URL}/predict`, { text });
      // Artificial delay for smooth UX
      setTimeout(() => {
        setResult(response.data);
        fetchStats(); // Refresh stats after prediction
        setLoading(false);
      }, 600);
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Analysis failed. Ensure backend is running.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white rounded-full shadow-md animate-bounce-slow">
              <Sparkles className="w-10 h-10 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Sentiment Analyzer
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Powered by Machine Learning • Real-time Analysis
          </p>
        </div>

        {/* Stats */}
        <StatsDashboard stats={stats} />

        {/* Main Analysis Section */}
        <AnalysisInput onAnalyze={handleAnalyze} loading={loading} />

        {/* Results */}
        {result && <ResultsDisplay result={result} />}

        {/* History */}
        <HistoryList history={history} />

      </div>
    </div>
  );
}

export default App;

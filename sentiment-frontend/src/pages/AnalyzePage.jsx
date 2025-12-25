import React, { useState } from 'react';
import AnalysisInput from '../components/AnalysisInput';
import ResultsDisplay from '../components/ResultsDisplay';
import HistoryList from '../components/HistoryList';
import BatchAnalysis from '../components/BatchAnalysis';
import { Sparkles, FileText } from 'lucide-react';

const AnalyzePage = ({ onAnalyze, onBatchAnalyze, loading, result, history }) => {
    const [activeTab, setActiveTab] = useState('single');

    return (
        <div className="analyze-page">
            <div className="page-header">
                <div>
                    <h1 className="heading-2">Sentiment Analysis</h1>
                    <p className="text-body">Analyze text to detect emotional tone and sentiment</p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="analyze-tabs">
                <button
                    className={`analyze-tab ${activeTab === 'single' ? 'active' : ''}`}
                    onClick={() => setActiveTab('single')}
                >
                    <Sparkles size={18} />
                    Single Analysis
                </button>
                <button
                    className={`analyze-tab ${activeTab === 'batch' ? 'active' : ''}`}
                    onClick={() => setActiveTab('batch')}
                >
                    <FileText size={18} />
                    Batch Analysis
                </button>
            </div>

            {/* Tab Content */}
            <div className="analyze-content">
                {activeTab === 'single' ? (
                    <div className="single-analysis animate-fade-in">
                        <AnalysisInput onAnalyze={onAnalyze} loading={loading} />
                        {result && <ResultsDisplay result={result} />}
                        <HistoryList history={history} />
                    </div>
                ) : (
                    <div className="batch-analysis animate-fade-in">
                        <BatchAnalysis onAnalyze={onBatchAnalyze} loading={loading} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalyzePage;

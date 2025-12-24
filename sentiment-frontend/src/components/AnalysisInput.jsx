import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AnalysisInput = ({ onAnalyze, loading }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAnalyze(text);
            setText("");
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Analyze Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        className="w-full p-4 text-gray-700 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                        rows="5"
                        placeholder="Enter customer review, feedback, or any text to analyze..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!text.trim() || loading}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]
            ${!text.trim() || loading
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30'}`}
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Analyzing Sentiment...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            <span>Analyze Sentiment</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AnalysisInput;

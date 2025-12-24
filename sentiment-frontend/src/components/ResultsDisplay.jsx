import React from 'react';
import { ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';

const ResultsDisplay = ({ result }) => {
    if (!result) return null;

    const isPositive = result.sentiment === 'positive';
    const Icon = isPositive ? ThumbsUp : ThumbsDown;
    const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';
    const borderColor = isPositive ? 'border-green-100' : 'border-red-100';
    const textColor = isPositive ? 'text-green-700' : 'text-red-700';
    const iconBg = isPositive ? 'bg-green-100' : 'bg-red-100';

    return (
        <div className={`p-6 rounded-xl border ${borderColor} ${bgColor} mb-8 animate-fade-in`}>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${iconBg} ${textColor}`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className={`text-xl font-bold capitalize ${textColor}`}>
                            {result.sentiment} Sentiment
                        </h3>
                        <p className="text-sm text-gray-500">
                            Confidence Score: {(result.confidence * 100).toFixed(1)}%
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-gray-600">Positive Score</span>
                        <span className="text-gray-900">{(result.positive_score * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500 transition-all duration-1000 ease-out"
                            style={{ width: `${result.positive_score * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-gray-600">Negative Score</span>
                        <span className="text-gray-900">{(result.negative_score * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-red-500 transition-all duration-1000 ease-out"
                            style={{ width: `${result.negative_score * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsDisplay;

import React from 'react';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, iconColor }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    </div>
);

const StatsDashboard = ({ stats }) => {
    if (!stats) return null;

    const { total_predictions, sentiment_distribution } = stats;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
                title="Total Predictions"
                value={total_predictions}
                icon={Activity}
                color="bg-indigo-50"
                iconColor="text-indigo-600"
            />
            <StatCard
                title="Positive Feedback"
                value={sentiment_distribution.positive}
                icon={TrendingUp}
                color="bg-green-50"
                iconColor="text-green-500"
            />
            <StatCard
                title="Negative Feedback"
                value={sentiment_distribution.negative}
                icon={TrendingDown}
                color="bg-red-50"
                iconColor="text-red-500"
            />
        </div>
    );
};

export default StatsDashboard;

import React from 'react';
import { Clock } from 'lucide-react';

const HistoryList = ({ history }) => {
    if (!history || history.length === 0) return null;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    Recent Predictions
                </h3>
            </div>
            <div>
                {history.map((item) => (
                    <div key={item.id} className="p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider
                ${item.sentiment === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {item.sentiment}
                            </span>
                            <span className="text-xs text-gray-400">
                                {new Date(item.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="text-gray-700 text-sm line-clamp-2">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryList;

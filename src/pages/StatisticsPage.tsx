import React from 'react';
import { BarChart2, TrendingUp, Activity, Heart } from 'lucide-react';

const StatisticsPage: React.FC = () => {
  const healthMetrics = [
    {
      title: 'Blood Pressure',
      current: '120/80',
      trend: '+2%',
      isGood: true,
      history: [65, 72, 68, 70, 75, 71, 68]
    },
    {
      title: 'Heart Rate',
      current: '72 bpm',
      trend: '-5%',
      isGood: true,
      history: [72, 75, 70, 72, 68, 74, 72]
    },
    {
      title: 'Blood Sugar',
      current: '95 mg/dL',
      trend: '+1%',
      isGood: true,
      history: [90, 92, 95, 93, 94, 95, 95]
    },
    {
      title: 'Weight',
      current: '165 lbs',
      trend: '-1%',
      isGood: true,
      history: [168, 167, 166, 166, 165, 165, 165]
    }
  ];

  const renderMiniChart = (data: number[]) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    return (
      <div className="flex items-end space-x-1 h-12">
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div
              key={index}
              className="w-1 bg-blue-200 rounded-t"
              style={{ height: `${height}%` }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Health Statistics</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-600">{metric.title}</h3>
              <span className={`text-sm ${metric.isGood ? 'text-green-600' : 'text-red-600'}`}>
                {metric.trend}
              </span>
            </div>
            <div className="text-2xl font-bold mb-4">{metric.current}</div>
            {renderMiniChart(metric.history)}
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Activity Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="text-red-500" />
                <span>Cardio Exercise</span>
              </div>
              <span className="text-blue-600 font-medium">3.5 hrs/week</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Activity className="text-green-500" />
                <span>Steps</span>
              </div>
              <span className="text-blue-600 font-medium">8,500/day</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <TrendingUp className="text-purple-500" />
                <span>Sleep</span>
              </div>
              <span className="text-blue-600 font-medium">7.2 hrs/day</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Health Goals Progress</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Weight Goal</span>
                <span className="text-blue-600 font-medium">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Exercise Goal</span>
                <span className="text-blue-600 font-medium">60%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Sleep Goal</span>
                <span className="text-blue-600 font-medium">90%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-11/12 h-full bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
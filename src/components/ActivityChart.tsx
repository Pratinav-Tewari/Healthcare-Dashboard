import React from 'react';

const ActivityChart: React.FC = () => {
  // Simulated data for the chart
  const data = [
    { day: 'Mon', values: [60, 0, 40, 0, 20] },
    { day: 'Tues', values: [35, 70, 0, 50, 0] },
    { day: 'Wed', values: [50, 0, 75, 0, 30] },
    { day: 'Thurs', values: [0, 45, 0, 65, 0] },
    { day: 'Fri', values: [80, 0, 35, 0, 60] },
    { day: 'Sat', values: [0, 50, 0, 40, 0] },
    { day: 'Sun', values: [30, 0, 20, 0, 10] },
  ];
  
  const colors = [
    'bg-cyan-400',
    'bg-blue-600',
    'bg-cyan-400',
    'bg-blue-600',
    'bg-cyan-400',
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Activity</h2>
        <div className="text-sm text-gray-500">3 appointment on this week</div>
      </div>
      
      <div className="flex h-48 items-end space-x-6">
        {data.map((item, dayIndex) => (
          <div key={item.day} className="flex-1 flex flex-col items-center">
            <div className="w-full flex items-end justify-center space-x-1 mb-2 h-40">
              {item.values.map((value, i) => (
                value > 0 && (
                  <div
                    key={i}
                    className={`${colors[i]} w-1.5 rounded-t-full`}
                    style={{ height: `${value}%` }}
                  ></div>
                )
              ))}
            </div>
            <div className="text-xs text-gray-500">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
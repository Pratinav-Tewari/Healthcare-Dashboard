import React from 'react';

interface HealthIndicatorProps {
  title: string;
  date: string;
  progress: number;
  icon: string;
  color: string;
}

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ 
  title, 
  date, 
  progress, 
  icon,
  color
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
        <span className="text-xl">{icon}</span>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} rounded-full`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HealthIndicator;
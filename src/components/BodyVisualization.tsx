import React from 'react';
import HealthIndicator from './HealthIndicator';

const BodyVisualization: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 relative">
      <div className="flex justify-between">
        <div className="w-1/2 flex items-center justify-center">
          {/* Simplified human body visualization */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gray-100 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Human body" 
                className="w-56 h-56 object-cover opacity-70"
              />
            </div>
            
            {/* Interactive health indicators */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Healthy Heart
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/2">
              <div className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Healthy Leg
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 space-y-6">
          <HealthIndicator 
            title="Lungs" 
            date="26 Oct 2021" 
            progress={75} 
            icon="🫁" 
            color="bg-red-500" 
          />
          
          <HealthIndicator 
            title="Teeth" 
            date="26 Oct 2021" 
            progress={90} 
            icon="🦷" 
            color="bg-blue-500" 
          />
          
          <HealthIndicator 
            title="Bone" 
            date="26 Oct 2021" 
            progress={60} 
            icon="🦴" 
            color="bg-orange-500" 
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <button className="text-blue-600 text-sm font-medium flex items-center">
          Details <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default BodyVisualization;
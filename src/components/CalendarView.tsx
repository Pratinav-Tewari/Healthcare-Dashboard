import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView: React.FC = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="appearance-none bg-transparent border border-gray-200 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>This Week</option>
              <option>Last Week</option>
              <option>Next Week</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
          
          <div className="font-medium">October 2021</div>
          
          <div className="flex space-x-2">
            <button className="p-1 rounded-md hover:bg-gray-100">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1 rounded-md hover:bg-gray-100">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map((day, index) => (
          <div key={day} className="text-center">
            <div className="text-sm text-gray-600 mb-2">{day}</div>
            <div className={`text-lg font-semibold p-2 rounded-lg ${index === 2 ? 'bg-blue-500 text-white' : ''}`}>
              {dates[index]}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-7 gap-4">
        {Array(7).fill(0).map((_, index) => (
          <div key={index} className="border-t border-gray-100 pt-2">
            <TimeSlot time="09:00" available={index === 6} />
            <TimeSlot time="10:00" available={index === 3 || index === 5} />
            <TimeSlot time="11:00" available={index === 4 || index === 6} />
            <TimeSlot time="12:00" available={index === 2 || index === 5} />
            <TimeSlot time="13:00" available={index === 2} />
            <TimeSlot time="14:00" available={index === 4 || index === 5} />
            <TimeSlot time="15:00" available={index === 5} />
            <TimeSlot time="16:00" available={index === 4} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface TimeSlotProps {
  time: string;
  available: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, available }) => {
  if (!available) return null;
  
  return (
    <div className="my-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded text-center">
      {time}
    </div>
  );
};

const ChevronDown: React.FC<{ size: number; className: string }> = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export default CalendarView;
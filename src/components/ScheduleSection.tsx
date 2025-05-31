import React from 'react';
import { Pencil, Eye, Heart, Brain } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">The Upcoming Schedule</h2>
      
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
        <div className="grid grid-cols-2 gap-4">
          <AppointmentCard 
            title="Health checkup complete" 
            time="11:00 AM" 
            icon={<Pencil className="text-blue-600" />} 
            bgColor="bg-blue-50" 
          />
          
          <AppointmentCard 
            title="Ophthalmologist" 
            time="14:00 PM" 
            icon={<Eye className="text-blue-600" />} 
            bgColor="bg-blue-50" 
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm text-gray-500 mb-3">On Saturday</h3>
        <div className="grid grid-cols-2 gap-4">
          <AppointmentCard 
            title="Cardiologist" 
            time="12:00 AM" 
            icon={<Heart className="text-red-500" />} 
            bgColor="bg-blue-50" 
          />
          
          <AppointmentCard 
            title="Neurologist" 
            time="16:00 PM" 
            icon={<Brain className="text-purple-600" />} 
            bgColor="bg-blue-50" 
          />
        </div>
      </div>
    </div>
  );
};

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: React.ReactNode;
  bgColor: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ 
  title, 
  time, 
  icon,
  bgColor
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-4 flex items-center justify-between`}>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default ScheduleSection;
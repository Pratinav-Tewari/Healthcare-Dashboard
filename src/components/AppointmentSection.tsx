import React from 'react';
import { Clock, User } from 'lucide-react';

const AppointmentSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <DoctorAppointment 
        title="Dentist"
        time="09:00-11:00"
        doctor="Dr. Cameron Williamson"
        icon="🦷"
        bgColor="bg-indigo-900"
        textColor="text-white"
      />
      
      <DoctorAppointment 
        title="Physiotherapy Appointment"
        time="11:00-12:00"
        doctor="Dr. Kevin Dynes"
        icon="🏊‍♂️"
        bgColor="bg-blue-50"
        textColor="text-gray-800"
      />
    </div>
  );
};

interface DoctorAppointmentProps {
  title: string;
  time: string;
  doctor: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

const DoctorAppointment: React.FC<DoctorAppointmentProps> = ({
  title,
  time,
  doctor,
  icon,
  bgColor,
  textColor
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-4 flex justify-between items-center`}>
      <div className={textColor}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center space-x-2 mb-1.5">
          <Clock size={14} />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <User size={14} />
          <span className="text-sm">{doctor}</span>
        </div>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
};

export default AppointmentSection;
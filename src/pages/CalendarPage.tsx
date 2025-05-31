import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const renderCalendarDays = () => {
    const days = [];
    const appointments = {
      5: { title: 'Dentist', time: '09:00 AM' },
      12: { title: 'Cardiologist', time: '02:30 PM' },
      18: { title: 'Physiotherapy', time: '11:00 AM' },
    };

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 md:h-32 bg-gray-50"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const appointment = appointments[day];
      days.push(
        <div key={day} className="h-24 md:h-32 border border-gray-100 p-2">
          <span className="text-sm text-gray-600">{day}</span>
          {appointment && (
            <div className="mt-2 p-1 bg-blue-50 rounded text-xs">
              <div className="font-medium text-blue-700">{appointment.title}</div>
              <div className="text-blue-600">{appointment.time}</div>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
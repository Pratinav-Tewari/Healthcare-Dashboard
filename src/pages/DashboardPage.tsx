import React from 'react';
import CalendarView from '../components/CalendarView';
import BodyVisualization from '../components/BodyVisualization';
import ScheduleSection from '../components/ScheduleSection';
import ActivityChart from '../components/ActivityChart';
import AppointmentSection from '../components/AppointmentSection';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <CalendarView />
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <BodyVisualization />
        <div className="space-y-6">
          <AppointmentSection />
          <ScheduleSection />
        </div>
      </div>
      
      <ActivityChart />
    </div>
  );
};

export default DashboardPage;
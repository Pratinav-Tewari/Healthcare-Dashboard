import React from 'react';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';

const AppointmentsPage: React.FC = () => {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-03-20',
      time: '09:00 AM',
      location: 'Heart Care Center',
      address: '123 Medical Plaza, Suite 200',
      phone: '(555) 123-4567',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Physiotherapist',
      date: '2024-03-22',
      time: '02:30 PM',
      location: 'Physical Therapy Clinic',
      address: '456 Health Street',
      phone: '(555) 987-6543',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Wilson',
      specialty: 'Dentist',
      date: '2024-03-25',
      time: '11:00 AM',
      location: 'Smile Dental Care',
      address: '789 Dental Road',
      phone: '(555) 456-7890',
      status: 'upcoming'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Upcoming Appointments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Schedule New Appointment
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map(appointment => (
          <div key={appointment.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                <p className="text-cyan-600">{appointment.specialty}</p>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {appointment.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar size={18} />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock size={18} />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} />
                <div>
                  <div>{appointment.location}</div>
                  <div className="text-sm text-gray-500">{appointment.address}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} />
                <span>{appointment.phone}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                Reschedule
              </button>
              <button className="flex-1 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;
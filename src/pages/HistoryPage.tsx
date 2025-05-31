import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const HistoryPage: React.FC = () => {
  const history = [
    {
      date: '2024-03-15',
      time: '09:00 AM',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      notes: 'Regular checkup, blood pressure normal',
      prescription: 'Lisinopril 10mg'
    },
    {
      date: '2024-03-01',
      time: '02:30 PM',
      doctor: 'Dr. Michael Chen',
      specialty: 'Orthopedics',
      notes: 'Follow-up on knee rehabilitation',
      prescription: 'Continue physical therapy'
    },
    {
      date: '2024-02-15',
      time: '11:00 AM',
      doctor: 'Dr. Emily Wilson',
      specialty: 'Dermatology',
      notes: 'Skin examination, minor eczema treatment',
      prescription: 'Topical corticosteroid cream'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Medical History</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {history.map((visit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar size={18} />
                <span>{visit.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={18} />
                <span>{visit.time}</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{visit.doctor}</h3>
            <p className="text-cyan-600 mb-4">{visit.specialty}</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-600">Notes</h4>
                <p className="text-gray-800">{visit.notes}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600">Prescription</h4>
                <p className="text-gray-800">{visit.prescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
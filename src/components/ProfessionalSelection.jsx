import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, DollarSign } from 'lucide-react';

const ProfessionalSelection = () => {
  const [selectedProfessional, setSelectedProfessional] = useState('any');

  const professionals = [
    {
      id: 'any',
      name: 'Any professional',
      subtitle: 'For best price availability',
      icon: User,
      price: null
    },
    {
      id: 'specialist',
      name: 'Specialist',
      subtitle: 'Beautician',
      icon: User,
      price: null
    },
    {
      id: 'senior',
      name: 'Senior specialist',
      subtitle: 'Hair Stylist',
      icon: DollarSign,
      price: null
    }
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>Home</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span>Search</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span>Restaurant, Salon & Spa</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-900 font-medium">Booking Service</span>
        </div>
      </nav>

      {/* Back button and title */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Select Professionals</h1>
      </div>

      {/* Professional Selection Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            onClick={() => setSelectedProfessional(professional.id)}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedProfessional === professional.id
                ? 'border-black bg-white'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedProfessional === professional.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                <professional.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{professional.name}</h3>
                <p className="text-sm text-gray-500">{professional.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSelection;
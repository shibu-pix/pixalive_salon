// pages/SelectProfessionalPage.jsx
import { useState } from 'react'
import DateSelector from '../components/DateSelector'
import ProfessionalSelector from '../components/ProfessionalSelector'
import TimeSlotTable from '../components/TimeSlotTable'
import CustomerApplications from '../components/CustomerApplications'
import Footer from '../components/Footer'

const SelectProfessionalPage = ({ onProfessionalSelect, initialData }) => {
  const [selectedProfessional, setSelectedProfessional] = useState(initialData.professional || null)
  const [selectedDateTime, setSelectedDateTime] = useState(initialData.dateTime || null)
  const [activeTab, setActiveTab] = useState('1')

  const professionals = [
    { id: '1', name: 'John Doe', specialty: 'Hair Stylist' },
    { id: '2', name: 'Jane Smith', specialty: 'Massage Therapist' },
    { id: '3', name: 'Mike Johnson', specialty: 'Personal Trainer' }
  ]

  const timeSlots = [
    { year: '100 g.m', sun: '10.00 g.m' },
    { year: '110 g.m', sun: '12.50 g.m' },
    { year: '120 g.m', sun: '2.00 g.m' },
    { year: '240 g.m', sun: '4.00 g.m' },
    { year: '240 g.m', sun: '6.00 g.m' }
  ]

  const handleContinue = () => {
    if (selectedProfessional && selectedDateTime) {
      onProfessionalSelect({
        professional: selectedProfessional,
        dateTime: selectedDateTime
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Select Professionals</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Date & Time</h2>
        
        <div className="flex mb-6">
          <button 
            className={`px-4 py-2 ${activeTab === '1' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('1')}
          >
            Preparation
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === '2' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('2')}
          >
            New Date
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Active XXXX</h3>
          <div className="flex space-x-2 mb-4">
            {[12, 13, 14, 15, 16, 17].map(num => (
              <button 
                key={num}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <DateSelector selectedDate={selectedDateTime?.date} onSelectDate={(date) => setSelectedDateTime({ ...selectedDateTime, date })} />
        <TimeSlotTable timeSlots={timeSlots} selectedTime={selectedDateTime?.time} onSelectTime={(time) => setSelectedDateTime({ ...selectedDateTime, time })} />
      </div>

      <ProfessionalSelector 
        professionals={professionals} 
        selectedProfessional={selectedProfessional}
        onSelect={setSelectedProfessional}
      />

      <CustomerApplications />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-gray-600 italic">From bold ideas to real-world tech— Pipeline is where innovation comes alive.</p>
      </div>

      <Footer />

      <div className="mt-6 flex justify-end">
        <button 
          onClick={handleContinue}
          disabled={!selectedProfessional || !selectedDateTime}
          className={`px-6 py-2 rounded-md ${(!selectedProfessional || !selectedDateTime) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default SelectProfessionalPage
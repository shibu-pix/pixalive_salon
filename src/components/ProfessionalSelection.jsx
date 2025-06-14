import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const ProfessionalSelection = ({ bookingData, updateBookingData, onNext, onPrev }) => {
  const [selectedProfessional, setSelectedProfessional] = useState('any')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)) // June 2025

  const professionals = [
    { 
      id: 'any', 
      name: 'Any professional', 
      subtitle: 'For maximum availability',
      icon: '🔄'
    },
    { 
      id: 'Beautician', 
      name: 'Premalatha', 
      subtitle: 'Beautician',
      icon: '👥'
    },
    { 
      id: 'Hair Stylist', 
      name: 'Somunaath', 
      subtitle: 'Hair Stylist',
      icon: '💰'
    }
  ]

  const timeSlots = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm',
    '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const handleDateSelect = (day) => {
    if (day) {
      setSelectedDate(day)
      updateBookingData({ date: day })
    }
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    updateBookingData({ time })
  }

  const handleProfessionalSelect = (professionalId) => {
    setSelectedProfessional(professionalId)
    const professional = professionals.find(p => p.id === professionalId)
    updateBookingData({ professional })
  }

  const canProceed = selectedProfessional && selectedDate && selectedTime

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button onClick={onPrev} className="flex items-center hover:text-gray-900">
          <span>← Back to Salon Details</span>
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Select Professionals</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {professionals.map((professional) => (
            <button
              key={professional.id}
              onClick={() => handleProfessionalSelect(professional.id)}
              className={`card text-left hover:shadow-md transition-shadow duration-200 ${
                selectedProfessional === professional.id 
                  ? 'ring-2 ring-primary-500 border-primary-500' 
                  : 'hover:border-gray-300'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-2xl mb-2">{professional.icon}</div>
                <div className="font-medium text-gray-900">{professional.name}</div>
                <div className="text-sm text-gray-500">{professional.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h2>
        
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-900">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-1 rounded hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-1 rounded hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {getDaysInMonth(currentMonth).map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors duration-200 ${
                  !day 
                    ? 'invisible' 
                    : selectedDate === day
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {selectedDate && (
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Available Times</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedTime === time
                        ? 'bg-black text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {canProceed && (
        <div className="flex justify-end">
          <button onClick={onNext} className="btn-primary">
            Continue to Review
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfessionalSelection
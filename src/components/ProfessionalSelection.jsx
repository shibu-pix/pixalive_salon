import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const ProfessionalSelection = ({ bookingData, updateBookingData, onNext, onPrev }) => {
  const [selectedProfessional, setSelectedProfessional] = useState('any')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)) // June 2025

  const professionals = [
    { id: 'any', name: 'Any professional', subtitle: 'For maximum availability', icon: '🔄' },
    { id: 'Beautician', name: 'Premalatha', subtitle: 'Beautician', icon: '👥' },
    { id: 'Hair Stylist', name: 'Somunaath', subtitle: 'Hair Stylist', icon: '💰' }
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
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null)
    for (let day = 1; day <= daysInMonth; day++) days.push(day)
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

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button onClick={onPrev} className="text-sm text-gray-600 mb-4 hover:underline">← Back to Salon Details</button>

      <h1 className="text-2xl font-bold mb-6">Select Professionals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {professionals.map(pro => (
          <button
            key={pro.id}
            onClick={() => handleProfessionalSelect(pro.id)}
            className={`border rounded-lg px-4 py-6 text-center hover:shadow-md transition-all ${selectedProfessional === pro.id ? 'border-black' : 'border-gray-300'}`}
          >
            <div className="text-3xl mb-2">{pro.icon}</div>
            <div className="font-medium text-gray-900">{pro.name}</div>
            <div className="text-sm text-gray-500">{pro.subtitle}</div>
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>

      <div className="border rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="font-medium">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-sm text-gray-500 font-medium mb-2">
          {dayNames.map(day => <div key={day} className="text-center py-2">{day}</div>)}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {getDaysInMonth(currentMonth).map((day, i) => (
            <button
              key={i}
              onClick={() => handleDateSelect(day)}
              disabled={!day}
              className={`w-10 h-10 rounded-full text-sm font-medium ${!day ? 'invisible' : selectedDate === day ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-800'}`}
            >
              {day}
            </button>
          ))}
        </div>

        {selectedDate && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Available Times</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium ${selectedTime === time ? 'bg-black text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {canProceed && (
        <div className="text-right">
          <button onClick={onNext} className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Continue to Review</button>
        </div>
      )}
    </div>
  )
}

export default ProfessionalSelection;

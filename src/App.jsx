// App.jsx
import { useState } from 'react'
import SelectProfessionalPage from './pages/SelectProfessionalPage'
import ReviewConfirmPage from './pages/ReviewConfirmPage'

function App() {
  const [currentPage, setCurrentPage] = useState('select')
  const [bookingData, setBookingData] = useState({
    professional: null,
    dateTime: null,
    discountCode: '',
    notes: []
  })

  const handleProfessionalSelect = (data) => {
    setBookingData(prev => ({ ...prev, ...data }))
    setCurrentPage('review')
  }

  const handleBackToSelection = () => {
    setCurrentPage('select')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'select' ? (
        <SelectProfessionalPage 
          onProfessionalSelect={handleProfessionalSelect} 
          initialData={bookingData}
        />
      ) : (
        <ReviewConfirmPage 
          bookingData={bookingData} 
          onBack={handleBackToSelection}
          onUpdateBookingData={setBookingData}
        />
      )}
    </div>
  )
}

export default App
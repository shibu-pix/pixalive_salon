// pages/ReviewConfirmPage.jsx
import { useState } from 'react'
import DiscountCode from '../components/DiscountCode'
import BookingNotes from '../components/BookingNotes'
import TotalSummary from '../components/TotalSummary'
import Footer from '../components/Footer'

const ReviewConfirmPage = ({ bookingData, onBack, onUpdateBookingData }) => {
  const [discountCode, setDiscountCode] = useState(bookingData.discountCode || '')
  const [notes] = useState([
    { title: 'Bachelor, Hero followed internship', items: ['$4.8 + 0.6%', '$2.9 + 0.5%', '$1.3 + 0.7%'] },
    { title: 'Louise Jan 14', items: ['Children: <$25 per (10 min duration)', '100 minutes'] },
    { title: 'Sophora', items: ['$1.1%', 'Not Out (Eight Division)', '$1.1%'] },
    { title: 'Nick Bashaker', items: ['$1.2%', 'Tax Amount ($1.1%)', '$1.2%'] }
  ])

  const handleApplyDiscount = (code) => {
    setDiscountCode(code)
    onUpdateBookingData(prev => ({ ...prev, discountCode: code }))
  }

  const handleConfirmBooking = () => {
    alert('Booking confirmed!')
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Review & Confirm</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Online Payment</h2>
        <p className="text-gray-600 mb-4">IT makes the full payment online.</p>
      </div>

      <DiscountCode 
        discountCode={discountCode} 
        onApply={handleApplyDiscount} 
      />

      <BookingNotes notes={notes} />

      <TotalSummary />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Give us a call</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Write to your family you are only your booking account.</p>
          </div>
          <div>
            <p className="font-medium">All customer support</p>
            <p className="text-gray-600">Call for personal personal, where you need them.</p>
          </div>
          <div>
            <p className="font-medium">Primary protection</p>
            <p className="text-gray-600">Use of it, if everything is in charge and does not work.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-gray-600 italic">From bold ideas to real-world tech— Practice is where innovation comes alive.</p>
      </div>

      <Footer variant="research" />

      <div className="mt-6 flex justify-between">
        <button 
          onClick={onBack}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
        >
          Back
        </button>
        <button 
          onClick={handleConfirmBooking}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default ReviewConfirmPage
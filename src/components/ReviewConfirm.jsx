import { useState } from 'react'
import { ChevronRight, Tag } from 'lucide-react'

const ReviewConfirm = ({ bookingData, updateBookingData, onPrev }) => {
  const [paymentOnline, setPaymentOnline] = useState(true)
  const [discountCode, setDiscountCode] = useState('')
  const [notes, setNotes] = useState('')
  const [showDiscountInput, setShowDiscountInput] = useState(false)

  const handleDiscountApply = () => {
    if (discountCode.toLowerCase() === 'discount10') {
      updateBookingData({ discount: 20, discountCode })
      setShowDiscountInput(false)
    }
  }

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    alert('Booking confirmed! You will receive a confirmation email shortly.')
  }

  const servicesTotal = bookingData.selectedServices?.reduce((total, service) => total + service.price, 0) || 180
  const total = servicesTotal - bookingData.discount

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button onClick={onPrev} className="flex items-center hover:text-gray-900">
          <span>← Back to Professional Selection</span>
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-900">Review & Confirm</h1>

      <div className="space-y-6">
        {/* Online Payment */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Online Payment</h3>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={paymentOnline}
              onChange={(e) => setPaymentOnline(e.target.checked)}
              className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
            />
            <span className="text-gray-700">I'll make the full payment online</span>
          </label>
        </div>

        {/* Discount Code */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Discount Code</h3>
          {!showDiscountInput ? (
            <button
              onClick={() => setShowDiscountInput(true)}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
            >
              <Tag className="w-4 h-4" />
              <span>Enter Discount Code</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex space-x-3">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Enter discount code"
                className="form-input flex-1"
              />
              <button
                onClick={handleDiscountApply}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Booking Notes */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value)
              updateBookingData({ notes: e.target.value })
            }}
            placeholder="Add any special requests or notes..."
            rows={4}
            className="form-input resize-none"
          />
        </div>

        {/* Booking Summary */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Service</span>
              <span className="font-medium">{bookingData.service.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Professional</span>
              <span className="font-medium">{bookingData.professional?.name || 'Any Professional'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time</span>
              <span className="font-medium">
                June {bookingData.date}, 2025 at {bookingData.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">30 minutes</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Price Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub Total</span>
              <span>₹{servicesTotal}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax Amount (8%)</span>
              <span>+ ₹{Math.round(servicesTotal * 0.08)}</span>
            </div>
            {bookingData.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ₹{bookingData.discount}</span>
              </div>
            )}
            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total + Math.round(servicesTotal * 0.08)}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirmBooking}
          className="w-full btn-primary py-4 text-lg"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  )
}

export default ReviewConfirm
import { useState } from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import Breadcrumb from './Breadcrumb'
import SalonDetails from './SalonDetails'
import ProfessionalSelection from './ProfessionalSelection'
import ReviewConfirm from './ReviewConfirm'

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: {
      name: "BarbeCo - Men's Salon and Barbershop",
      rating: 4.9,
      reviews: 78,
      location: "Sukkur, Sindh 15",
      duration: "30 min (30 min services duration)",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    selectedServices: [],
    professional: null,
    date: null,
    time: null,
    price: 0,
    discount: 0,
    discountCode: '',
    notes: ''
  })

  const updateBookingData = (data) => {
    setBookingData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const steps = [
    { id: 1, name: 'Salon Details', active: currentStep >= 1 },
    { id: 2, name: 'Booking Service', active: currentStep >= 2 },
    { id: 3, name: 'Review & Confirm', active: currentStep >= 3 }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumb steps={steps} currentStep={currentStep} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <SalonDetails 
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
            />
          )}
          {currentStep === 2 && (
            <ProfessionalSelection 
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <ReviewConfirm 
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onPrev={prevStep}
            />
          )}
        </div>
        
        <div className="lg:col-span-1">
          <BookingSummary bookingData={bookingData} />
        </div>
      </div>
    </div>
  )
}

const BookingSummary = ({ bookingData }) => {
  const { service, selectedServices = [], professional, date, time, price, discount } = bookingData
  const total = price - discount
  
  return (
    <div className="card sticky top-8">
      <div className="flex space-x-4 mb-6">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({service.reviews})</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {service.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {service.duration}
        </div>
        <div className="text-sm text-gray-600">
          Instantbook
        </div>
      </div>
      
      <div className="border-t pt-4 space-y-3">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex justify-between text-sm">
            <span>{service.name}</span>
            <span>₹{service.price}</span>
          </div>
        ))}
        {selectedServices.length === 0 && (
          <>
            <div className="flex justify-between text-sm">
              <span>Eyebrows</span>
              <span>₹120</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Hair Cut (Style Director)</span>
              <span>₹60</span>
            </div>
          </>
        )}
        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}
        <div className="border-t pt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total || 180}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4 text-sm text-gray-600">
        <div className="flex items-start space-x-3">
          <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-gray-900">Give us a call</div>
            <div>We're happy to help you out with your booking</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-4 h-4 mt-0.5 flex-shrink-0 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-medium text-gray-900">24/7 customer support</div>
            <div>Get live answers any time, when you need them</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-4 h-4 mt-0.5 flex-shrink-0 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-medium text-gray-900">Privacy protection</div>
            <div>We use SSL encryption to keep your data secure</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingFlow
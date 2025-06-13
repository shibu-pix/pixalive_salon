import { useState } from 'react'
import { Star, MapPin, Clock, Phone, Wifi, Car, CreditCard, Users } from 'lucide-react'

const SalonDetails = ({ bookingData, updateBookingData, onNext }) => {
  const [selectedServices, setSelectedServices] = useState([])

  const services = [
    {
      id: 'eyebrows',
      name: 'Eyebrows',
      price: 120,
      duration: '30 min',
      description: 'Professional eyebrow shaping and styling'
    },
    {
      id: 'haircut',
      name: 'Hair Cut (Style Director)',
      price: 60,
      duration: '45 min',
      description: 'Premium haircut by our style director'
    },
    {
      id: 'beard-trim',
      name: 'Beard Trim',
      price: 40,
      duration: '20 min',
      description: 'Professional beard trimming and styling'
    },
    {
      id: 'hair-wash',
      name: 'Hair Wash & Blow Dry',
      price: 30,
      duration: '25 min',
      description: 'Complete hair wash and professional blow dry'
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Parking Available' },
    { icon: CreditCard, name: 'Card Payment' },
    { icon: Users, name: 'Group Bookings' }
  ]

  const handleServiceToggle = (service) => {
    const isSelected = selectedServices.find(s => s.id === service.id)
    if (isSelected) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleContinue = () => {
    if (selectedServices.length > 0) {
      updateBookingData({ 
        selectedServices,
        price: selectedServices.reduce((total, service) => total + service.price, 0)
      })
      onNext()
    }
  }

  const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0)

  return (
    <div className="space-y-8">
      <div className="card">
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={bookingData.service.image}
            alt={bookingData.service.name}
            className="w-full md:w-48 h-48 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {bookingData.service.name}
            </h1>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(bookingData.service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {bookingData.service.rating} ({bookingData.service.reviews} reviews)
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{bookingData.service.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Open today: 9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
                  <amenity.icon className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Services</h2>
        
        <div className="space-y-4">
          {services.map((service) => {
            const isSelected = selectedServices.find(s => s.id === service.id)
            return (
              <div 
                key={service.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'border-black bg-gray-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-600">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">₹{service.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {selectedServices.length > 0 && (
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-900">
                Total ({selectedServices.length} service{selectedServices.length > 1 ? 's' : ''})
              </span>
              <span className="font-semibold text-lg">₹{totalPrice}</span>
            </div>
            
            <button 
              onClick={handleContinue}
              className="w-full btn-primary"
            >
              Continue to Book Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SalonDetails
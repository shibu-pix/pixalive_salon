import { useState } from 'react'
import Header from './components/Header'
import BookingFlow from './components/BookingFlow'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BookingFlow />
      </main>
      <Footer />
    </div>
  )
}

export default App
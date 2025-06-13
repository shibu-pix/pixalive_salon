// components/DiscountCode.jsx
import { useState } from 'react'

const DiscountCode = ({ discountCode, onApply }) => {
  const [code, setCode] = useState(discountCode)
  const [isApplied, setIsApplied] = useState(!!discountCode)

  const handleApply = () => {
    if (code.trim()) {
      onApply(code)
      setIsApplied(true)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Discount Code</h2>
      {isApplied ? (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
          <span className="text-green-700">Discount code applied: {discountCode}</span>
          <button 
            onClick={() => {
              onApply('')
              setIsApplied(false)
              setCode('')
            }}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter discount code"
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  )
}

export default DiscountCode
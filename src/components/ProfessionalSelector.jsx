// components/ProfessionalSelector.jsx
const ProfessionalSelector = ({ professionals, selectedProfessional, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Professional</h2>
      <div className="space-y-4">
        {professionals.map(pro => (
          <div 
            key={pro.id}
            onClick={() => onSelect(pro)}
            className={`p-4 border rounded-lg cursor-pointer ${selectedProfessional?.id === pro.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <h3 className="font-medium text-gray-800">{pro.name}</h3>
            <p className="text-sm text-gray-600">{pro.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalSelector
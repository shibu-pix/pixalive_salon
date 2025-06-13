// components/TimeSlotTable.jsx
const TimeSlotTable = ({ timeSlots, selectedTime, onSelectTime }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Year</th>
            <th className="py-2 px-4 border">Time</th>
            <th className="py-2 px-4 border">Ft</th>
            <th className="py-2 px-4 border">Sat</th>
            <th className="py-2 px-4 border">Sun</th>
            <th className="py-2 px-4 border">Net</th>
            <th className="py-2 px-4 border">Tv</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{slot.year}</td>
              <td className="py-2 px-4 border">
                <button 
                  onClick={() => onSelectTime(slot.sun)}
                  className={`px-2 py-1 rounded ${selectedTime === slot.sun ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                >
                  {slot.sun}
                </button>
              </td>
              <td className="py-2 px-4 border">{slot.ft || '-'}</td>
              <td className="py-2 px-4 border">{slot.sat || '-'}</td>
              <td className="py-2 px-4 border">{slot.sun || '-'}</td>
              <td className="py-2 px-4 border">{slot.net || '-'}</td>
              <td className="py-2 px-4 border">{slot.tv || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TimeSlotTable
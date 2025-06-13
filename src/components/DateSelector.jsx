// components/DateSelector.jsx
const DateSelector = ({ selectedDate, onSelectDate }) => {
  const dates = [
    { day: 'Mon', date: '12', month: 'Jun' },
    { day: 'Tue', date: '13', month: 'Jun' },
    { day: 'Wed', date: '14', month: 'Jun' },
    { day: 'Thu', date: '15', month: 'Jun' },
    { day: 'Fri', date: '16', month: 'Jun' },
    { day: 'Sat', date: '17', month: 'Jun' },
    { day: 'Sun', date: '18', month: 'Jun' }
  ]

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-2">Select Date</h3>
      <div className="grid grid-cols-7 gap-2">
        {dates.map((d, index) => (
          <button
            key={index}
            onClick={() => onSelectDate(`${d.day} ${d.date} ${d.month}`)}
            className={`p-2 rounded-md flex flex-col items-center ${selectedDate === `${d.day} ${d.date} ${d.month}` ? 'bg-blue-100 border border-blue-300' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <span className="text-sm">{d.day}</span>
            <span className="font-medium">{d.date}</span>
            <span className="text-xs">{d.month}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default DateSelector
// components/BookingNotes.jsx
const BookingNotes = ({ notes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Booking Notes</h2>
      <div className="space-y-6">
        {notes.map((note, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-800 mb-2">{note.title}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {note.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingNotes
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Breadcrumb = ({ steps, currentStep }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <ChevronLeft className="w-4 h-4" />
      <div className="flex items-center space-x-2">
        <span>Home</span>
        <ChevronRight className="w-3 h-3" />
        <span>Salon</span>
        <ChevronRight className="w-3 h-3" />
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-2">
            <span className={step.active ? 'text-gray-900 font-medium' : 'text-gray-500'}>
              {step.name}
            </span>
            {index < steps.length - 1 && <ChevronRight className="w-3 h-3" />}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
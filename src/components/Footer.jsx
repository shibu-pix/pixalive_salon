// components/Footer.jsx
const Footer = ({ variant = 'pipeline' }) => {
  if (variant === 'pipeline') {
    return (
      <footer className="text-center text-sm text-gray-500 mt-8">
        <p>© 2018 Privacy Technology Services, UK</p>
        <p className="my-2">www.pipe.com</p>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="font-medium text-gray-700">Contact</h3>
          <p>contact@pipelinehealth.com</p>
          <p>475 97785 83666</p>
          <p>E-mail: @pipelinehealth.com</p>
          <p>Excellence City, Stampdown</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <span>Terms of time</span>
          <span>Primary Policy</span>
        </div>
      </footer>
    )
  }

  return (
    <footer className="text-center text-sm text-gray-500 mt-8">
      <p>© 2018 Faculty Technology Services, UK</p>
      <p className="my-2">info@research.com</p>
      <div className="border-t border-gray-200 pt-4 mt-4">
        <h3 className="font-medium text-gray-700">Contact</h3>
        <p>contact@researchtech.com</p>
        <p>v16 97766 840646</p>
        <p>Emailing: Robert Mitsume's Business Limited</p>
        <p>Documents: City, Stereophore</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <span>Town of New</span>
        <span>Phone/Phone</span>
      </div>
    </footer>
  )
}

export default Footer
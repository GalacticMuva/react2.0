import { useState } from 'react'

const ContactForm = () => {
 
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // Send button
  const handleSubmit = (e) => {
    e.preventDefault() 
    alert(`Thank you, ${name}! Your message: "${message}" has been sent.`)
    
    // Clear Form
    setName('')
    setMessage('')
  }

  return (
    <div className="container mt-5 p-4 border rounded bg-light">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
            className="form-control" 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
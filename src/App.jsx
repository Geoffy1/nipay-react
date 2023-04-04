import React, { useState } from 'react'
import './App.css'

function App() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (code.trim() === '') {
      alert('Please enter a code.')
      return
    }

    // TODO: Process payment using PayPal API

    setMessage('Payment successful. Thank you for using nipay!')
  }

  function handleCodeChange(event) {
    setCode(event.target.value)
  }

  return (
    <div className="container">
      <h1>nipay</h1>
      <form id="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="code">Enter Code:</label>
        <input
          type="text"
          id="code"
          name="code"
          value={code}
          onChange={handleCodeChange}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
      <div id="payment-message">{message}</div>
    </div>
  )
}

export default App

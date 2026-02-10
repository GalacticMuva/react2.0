import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApiPets } from './components/apiPets.jsx'

function App() {
  return (
    <main className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Week 2: Database Integration</h1>
        <p className="lead text-muted">Fetching live data from Supabase</p>
      </header>

      <ApiPets />

      <footer className="text-center mt-5 py-4 border-top">
        <p className="text-muted">Pet Database Project &copy; 2026</p>
      </footer>
    </main>
  )
}




export default App

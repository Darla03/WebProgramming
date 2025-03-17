import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <div className="min-h-screen bg-gray-300 justify-center flex
       flex-col items-center p-6">
        <header className="text-center m-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome To My Landing Page</h1>
      <p className = "text-gray-600 mt-2" > Discover more about what I do!</p>
        </header>

        <main className="max-w-3xl bg-white mt-2 rounded-2xl shadow-lg text-center">
        <p className="text-gray-600 mb-4" > I like web programming</p>
        
        <button className= "bg-blue-100 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Started</button>
        </main>
        <footer className="w-full text-center text-gray-700 mt-6">All rights reserved</footer>
      </div>
  
      </>
  )
}

export default App

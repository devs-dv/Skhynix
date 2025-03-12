import { useState } from 'react'

import './App.css'
import AIDailyGallery from './components/AIDailyGallery'
import Steps from './components/Steps'
import AIMusicGenerator from './components/AIMusicGenerator'
import SKHynixAIPage from './components/SKHynixAIPage'
import EpilogueSection from './components/epilogue-section'

function App() {
  

  return (
    <>
      {/* <AIDailyGallery /> */}
      {/* <Steps /> */}
      <AIMusicGenerator />
      <EpilogueSection />
      <SKHynixAIPage />
    </>
  )
}

export default App

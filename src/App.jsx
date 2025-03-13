import { useState } from 'react'

import './App.css'
import AIDailyGallery from './components/AIDailyGallery'
import Steps from './components/Steps'
import AIMusicGenerator from './components/Step4'
import SKHynixAIPage from './components/FeatureCards'
import EpilogueSection from './components/Epilogue'
import AIContentSection from './components/Step3'
import Step2 from './components/Step2'
import Step1 from './components/Step1'
import ResponsiveImageGallery from './components/ResponsiveImageGallery'
import StepTwo from './components/step-two/StepTwo'
import ImageShow from './components/ImageShow'
import NavBar from './components/NavBar'


function App() {
  

  return (
    <>
      {/* <AIDailyGallery /> */}
      {/* <Steps /> */}
      {/* <ResponsiveImageGallery /> */}
      <NavBar/>
      <ImageShow />
      <Step1/>
      <StepTwo />
      <AIContentSection/>
      <AIMusicGenerator />
      <EpilogueSection />
      <SKHynixAIPage />
    </>
  )
}

export default App

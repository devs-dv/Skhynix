import { useState } from 'react'

import './App.css'

import AIMusicGenerator from './components/Step4'
import SKHynixAIPage from './components/FeatureCards'
import EpilogueSection from './components/Epilogue'
import AIContentSection from './components/Step3'
import Step2 from './components/Step2'
import Step1 from './components/Step1'

import ImageShow from './components/ImageShow'
import NavBar from './components/NavBar'
import Comp1 from './components/Comp1'


function App() {
  

  return (
    <>
      <NavBar />

      <ImageShow />
      <div className="bg-[url('/bgStep1.png')] bg-[125px_15px] bg-no-repeat bg-center w-full h-screen bg-cover bg-center w-full h-screen ">
        <Comp1 />
        <Step1 />
      </div>
      <Step2 />

      <div
        className="relative w-full min-h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/bgStep34.png')",
          backgroundPosition: "center top -296px",
        }}
      >
        <div className="relative z-10">
          <AIContentSection />
          <AIMusicGenerator />
        </div>
      </div>

      <EpilogueSection />
      <SKHynixAIPage />
    </>
  );
}

export default App

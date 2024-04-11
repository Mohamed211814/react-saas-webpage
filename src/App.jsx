import './App.css'

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Workflow />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  )
}

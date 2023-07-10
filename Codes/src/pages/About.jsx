import React from 'react'
import HeroSection from '../components/aboutUsComponent/HeroSection'
import CoreValue from '../components/aboutUsComponent/CoreValue'
import Features from '../components/aboutUsComponent/Features'
import CaseStudey from '../components/aboutUsComponent/CaseStudey'
import AboutUs from '../components/aboutUsComponent/AboutUs'
import StandsFor from '../components/aboutUsComponent/StandsFor'
import Msg from '../components/aboutUsComponent/Msg'
import Join from '../components/aboutUsComponent/JOIN'
import WhatWeThink from '../components/businessComponent/WhatWeThink'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <CoreValue/>
      <Features/>
      <CaseStudey/>
      <AboutUs/>
      <StandsFor/>
      <Msg/>
      <Join/>
    </div>
  )
}

export default About

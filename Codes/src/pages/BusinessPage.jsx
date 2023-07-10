import React from 'react'
import Hero from '../components/businessComponent/Hero'
import Harness from '../components/businessComponent/Harness'
import Capabilities from '../components/businessComponent/Capabilities'
import WhatWeThink from '../components/businessComponent/WhatWeThink'
import CaseStudey from '../components/aboutUsComponent/CaseStudey'
import Leaders from './Leaders'

const BusinessPage = () => {
  return (
    <div>
      <Hero/>
      <Harness/>
      <Capabilities/>
      <WhatWeThink/>
      <CaseStudey/>
      <Leaders/>
    </div>
  )
}

export default BusinessPage

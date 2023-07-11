import React from 'react'
import Joinus from '../components/careersComponent/Joinus'
import WhySection from '../components/careersComponent/WhySection'
import FindJobs from '../components/careersComponent/FindJobs'
import Hero from '../components/careersComponent/Hero'
import FooterMsg from '../components/careersComponent/FooterMsg'
import Benifits from '../components/careersComponent/Benifits'
import Difference from '../components/careersComponent/Difference'

const Careers = () => {
  return (
    <div>
      <Hero/>
      <Joinus/>
      <WhySection/>
      <FindJobs/>
      <Difference/>
      <Benifits/>
      <FooterMsg/>
    </div>
  )
}

export default Careers

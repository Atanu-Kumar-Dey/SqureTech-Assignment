import React from 'react'
import Joinus from '../components/careersComponent/Joinus'
import WhySection from '../components/careersComponent/WhySection'
import FindJobs from '../components/careersComponent/FindJobs'
import FooterMsg from '../components/careersComponent/FooterMsg'
import Hero from '../components/careersComponent/Hero'

const Careers = () => {
  return (
    <div>
      <Hero/>
      <Joinus/>
      <WhySection/>
      <FindJobs/>
      {/* <FooterMsg/> */}
    </div>
  )
}

export default Careers

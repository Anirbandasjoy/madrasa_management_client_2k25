import AboutSection from '@/components/layout/home/AboutSection'
import ClasswiseStudentsStatistics from '@/components/layout/home/ClasswiseStudentsStatistics'
import ContactUs from '@/components/layout/home/ContactUs'
import Events from '@/components/layout/home/Events'
import ManagingCommittee from '@/components/layout/home/ManagingCommittee'
import MediaCoverage from '@/components/layout/home/MediaCoverage'
import MessageofthePrincipal1 from '@/components/layout/home/MessageofthePrincipal1'
import OurTeachers from '@/components/layout/home/OurTeachers'
import WhatPeopleSaid from '@/components/layout/home/WhatPeopleSaid'
import Hero from '@/components/layout/shared/Hero'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <MessageofthePrincipal1 />
      <AboutSection />
      <OurTeachers />
      <ManagingCommittee />
      <ClasswiseStudentsStatistics />
      <Events />
      <MediaCoverage/>
      <WhatPeopleSaid/>
      <ContactUs/>
    </div>
  )
}

export default page
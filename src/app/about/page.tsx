import AboutUs from '@/components/aboutus'
import Company from '@/components/company'
import ProblemsSection from '@/components/ProblemsSection'
import StatsSection from '@/components/StatsSection'
import Team from '@/components/team'
import Video from '@/components/video'
import Work from '@/components/work'
import React from 'react'

const about = () => {
  return (
    <div className='max-w-6xl mx-auto'><AboutUs/>
    <ProblemsSection/>
    <StatsSection/>
    <Video/>
    <Team/>
    <Company/>
    <Work/>
    </div>
  )
}

export default about
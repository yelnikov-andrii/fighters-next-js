import { AboutUs } from '@/components/aboutus/AboutUs'
import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper'
import React from 'react'

export default function page() {
  return (
    <div>
      <ReduxWrapper>
        <AboutUs />
      </ReduxWrapper>
    </div>
  )
}

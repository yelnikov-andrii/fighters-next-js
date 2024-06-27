import { Accessibility } from '@/components/accessibility/Accessibility'
import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper'
import React from 'react'

export default function page() {
  return (
    <ReduxWrapper>
      <Accessibility />
    </ReduxWrapper>
  )
}

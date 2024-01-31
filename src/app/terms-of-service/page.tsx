import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper'
import { Terms } from '@/components/terms-of-service/Terms'
import React from 'react'

export default function page() {
  return (
    <ReduxWrapper>
      <Terms />
    </ReduxWrapper>
  )
}

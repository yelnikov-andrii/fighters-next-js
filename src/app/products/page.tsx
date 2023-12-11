import { Products } from '@/components/products/Products'
import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper'
import React from 'react'

export default function Page() {
  return (
    <div>
      <ReduxWrapper>
        <Products />
      </ReduxWrapper>
    </div>
  )
}

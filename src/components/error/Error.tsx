import React from 'react'
import { ReduxWrapper } from '../reduxWrapper/Wrapper';

interface Props {
  children: React.ReactNode;
}

export const Error: React.FC<Props> = ({ children }) => {
  return (
    <ReduxWrapper>
      {children}
    </ReduxWrapper>
  )
}

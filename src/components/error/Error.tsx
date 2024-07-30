import React from 'react'
import { ReduxWrapper } from '../../app/Wrapper';

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

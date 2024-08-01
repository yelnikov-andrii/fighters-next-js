'use client'
import { Error } from '@/components/elements/error/Error';
import { ErrorBlock } from '@/components/elements/error/ErrorBlock';
import React from 'react'

export default function error() {
  return (
    <div className='container'>
      <Error>
        <ErrorBlock />
      </Error>
    </div>
  )
}
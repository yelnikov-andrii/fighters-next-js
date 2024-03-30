'use client'
import { Error } from '@/components/error/Error';
import { ErrorBlock } from '@/components/error/ErrorBlock';
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
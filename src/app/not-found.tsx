import { ErrorBlock } from '@/components/elements/error/ErrorBlock';
import MainLayout from '@/components/layouts/Layout';
import React from 'react'

export default function error() {
  return (
    <MainLayout>
      <ErrorBlock />
    </MainLayout>
  )
}
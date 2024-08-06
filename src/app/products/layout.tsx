import MainLayout from '@/components/layouts/Layout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Made for fighters',
}

export default function layout({ children }: {children: React.ReactNode}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

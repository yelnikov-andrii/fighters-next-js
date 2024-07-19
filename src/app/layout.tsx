import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google';
import './globals.css'
// import { Header } from '@/components/header/Header'
// import { Footer } from '@/components/footer/Footer';
import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper';
import MainLayout from '@/components/layouts/Layout';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });
export const osvald = Oswald({ subsets: ['latin'], variable: '--font-osvald' });

export const metadata: Metadata = {
  title: 'Fighters Shop',
  description: 'Made for fighters',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={opensans.className}>
        {/* <Header />
          {children}
          <Footer /> */}
        <ReduxWrapper>
          <NextIntlClientProvider messages={messages}>
            <MainLayout>
              {children}
            </MainLayout>
          </NextIntlClientProvider>
        </ReduxWrapper>

      </body>
    </html>
  )
}

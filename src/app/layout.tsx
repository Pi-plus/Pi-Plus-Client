import type { Metadata } from 'next';
import classNames from 'classnames';

import { PortalProvider } from '@/components/GlobalPortal';
import Header from '@/components/Header';
import { ChakraUIProvider, ReactQueryProvider } from '@/providers';

import { pretendard } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Pi Plus',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={classNames('size-full flex-1', pretendard.className)}>
        <ReactQueryProvider>
          <PortalProvider>
            <ChakraUIProvider>
              <div className="flex flex-col min-h-screen w-full">
                <Header />
                {children}
              </div>
            </ChakraUIProvider>
          </PortalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

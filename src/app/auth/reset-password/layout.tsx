import '../../styles/globals.css';
import {Inter} from 'next/font/google';
import VerificationLayout from '@/components/Verification/Layout';
import Providers from '../../providers';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Reset password | TrustPaddi',
  description: '',
};

export default function RestPasswordLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <VerificationLayout>{children}</VerificationLayout>
        </Providers>
      </body>
    </html>
  );
}

import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/app/dashboard/layout/Layout';
import Providers from '../../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cart',
  description: '',
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

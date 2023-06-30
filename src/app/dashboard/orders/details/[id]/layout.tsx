import '../../../../styles/globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/app/dashboard/layout/Layout';
import Providers from '../../../../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Orders Details',
  description: '',
};

export default function OrderDetailsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

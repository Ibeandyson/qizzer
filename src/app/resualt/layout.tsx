import Providers from '../providers';

export const metadata = {
  title: '',
  description: '',
};

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}

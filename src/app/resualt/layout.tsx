import Providers from '../providers';

export const metadata = {
  title: '',
  description: '',
};

export default function ResualtLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}

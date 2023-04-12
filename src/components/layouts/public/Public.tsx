import { Header } from '~/layout/header';

interface PublicLayoutProps {
  children: React.ReactNode;
}

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main className="mt-80 grow p-20">{children}</main>
    </>
  );
}

export default PublicLayout;

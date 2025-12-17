import { ReactNode } from 'react';
import { TopNav } from './TopNav';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

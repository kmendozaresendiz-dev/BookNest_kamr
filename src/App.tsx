import { useEffect } from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { ToastProvider } from '@/components/ui/Toast';
import AppLayout from '@/components/layout/AppLayout';
import WelcomePage from '@/pages/WelcomePage';
import HomePage from '@/pages/HomePage';
import LibraryPage from '@/pages/LibraryPage';
import ProgressPage from '@/pages/ProgressPage';
import DiaryPage from '@/pages/DiaryPage';
import ProfilePage from '@/pages/ProfilePage';
import { useHashRoute } from '@/hooks/useHashRoute';
import type { RouteId } from '@/lib/routes';

function App() {
  return (
    <ToastProvider>
      <AppProvider>
        <BookNestRoot />
      </AppProvider>
    </ToastProvider>
  );
}

function BookNestRoot() {
  const { data } = useApp();
  const route = useHashRoute();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  if (!data.profile.name) return <WelcomePage />;

  return <AppLayout route={route}>{renderPage(route)}</AppLayout>;
}

function renderPage(route: RouteId) {
  switch (route) {
    case 'inicio':
      return <HomePage />;
    case 'biblioteca':
      return <LibraryPage />;
    case 'progreso':
      return <ProgressPage />;
    case 'diario':
      return <DiaryPage />;
    case 'perfil':
      return <ProfilePage />;
  }
}

export default App;

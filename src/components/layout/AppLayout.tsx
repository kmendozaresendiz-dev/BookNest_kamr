import type { ReactNode } from 'react';
import BrandLogo from '@/components/brand/BrandLogo';
import { NAV_ITEMS, type NavItem } from '@/components/layout/navItems';
import type { RouteId } from '@/lib/routes';

interface AppLayoutProps {
  route: RouteId;
  children: ReactNode;
}

export default function AppLayout({ route, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-cream-50">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-20 flex-col border-r border-cocoa-100 bg-white/80 px-3 py-8 backdrop-blur md:flex lg:w-64 lg:px-5">
        <div className="mb-10 px-2 lg:px-2">
          <div className="lg:hidden">
            <BrandLogo compact />
          </div>
          <div className="hidden lg:block">
            <BrandLogo />
          </div>
        </div>
        <nav className="flex flex-col gap-2" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <SideNavLink key={item.id} item={item} active={item.id === route} />
          ))}
        </nav>
      </aside>

      <main className="min-h-screen pb-28 md:ml-20 md:pb-12 lg:ml-64">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:px-10">{children}</div>
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-cocoa-100 bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur md:hidden"
        aria-label="Navegación principal"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <BottomNavLink item={item} active={item.id === route} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function SideNavLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <a
      href={`#/${item.id}`}
      aria-current={active ? 'page' : undefined}
      aria-label={item.label}
      title={item.label}
      className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition duration-200 justify-center lg:justify-start ${
        active ? 'bg-rose-200 text-cocoa-800 shadow-sm' : 'text-cocoa-500 hover:bg-cocoa-50 hover:text-cocoa-800'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden lg:inline">{item.label}</span>
    </a>
  );
}

function BottomNavLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <a
      href={`#/${item.id}`}
      aria-current={active ? 'page' : undefined}
      className={`flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[11px] font-medium transition ${
        active ? 'text-cocoa-800' : 'text-cocoa-400'
      }`}
    >
      <span
        className={`flex h-8 w-14 items-center justify-center rounded-full transition ${active ? 'bg-rose-200' : ''}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">{item.label}</span>
    </a>
  );
}

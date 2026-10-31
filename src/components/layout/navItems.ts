import { BookMarked, Home, LineChart, NotebookPen, UserRound, type LucideIcon } from 'lucide-react';
import type { RouteId } from '@/lib/routes';

export interface NavItem {
  id: RouteId;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'biblioteca', label: 'Mi biblioteca', icon: BookMarked },
  { id: 'progreso', label: 'Mi progreso', icon: LineChart },
  { id: 'diario', label: 'Diario', icon: NotebookPen },
  { id: 'perfil', label: 'Mi perfil', icon: UserRound },
];

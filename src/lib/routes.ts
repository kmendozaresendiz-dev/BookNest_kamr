export const ROUTE_IDS = ['inicio', 'biblioteca', 'progreso', 'diario', 'perfil'] as const;

export type RouteId = (typeof ROUTE_IDS)[number];

export const DEFAULT_ROUTE: RouteId = 'inicio';

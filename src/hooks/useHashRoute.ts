import { useEffect, useState } from 'react';
import { DEFAULT_ROUTE, ROUTE_IDS, type RouteId } from '@/lib/routes';

function readRoute(): RouteId {
  const id = window.location.hash.replace(/^#\/?/, '');
  return (ROUTE_IDS as readonly string[]).includes(id) ? (id as RouteId) : DEFAULT_ROUTE;
}

export function useHashRoute(): RouteId {
  const [route, setRoute] = useState<RouteId>(readRoute);

  useEffect(() => {
    const handleChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  return route;
}

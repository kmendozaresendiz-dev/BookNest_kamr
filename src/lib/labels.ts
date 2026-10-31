import type { ReadingStatus } from '@/types';

export const STATUS_LABELS: Record<ReadingStatus, string> = {
  leido: 'Leído',
  leyendo: 'Leyendo',
  quiero: 'Quiero leer',
};

export const STATUS_OPTIONS: ReadingStatus[] = ['quiero', 'leyendo', 'leido'];

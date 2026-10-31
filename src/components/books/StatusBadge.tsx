import type { ReadingStatus } from '@/types';
import { STATUS_LABELS } from '@/lib/labels';

const STATUS_CLASSES: Record<ReadingStatus, string> = {
  leido: 'bg-sage-200 text-sage-600',
  leyendo: 'bg-lavender-200 text-lavender-600',
  quiero: 'bg-cream-200 text-cream-700',
};

export default function StatusBadge({ status }: { status: ReadingStatus }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${STATUS_CLASSES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

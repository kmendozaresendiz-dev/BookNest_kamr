import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void; icon?: LucideIcon };
  children?: ReactNode;
}

export default function EmptyState({ icon: Icon, title, description, action, children }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-cocoa-200 bg-white/60 px-6 py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-cocoa-600">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <div className="flex max-w-sm flex-col gap-2">
        <h3 className="text-xl">{title}</h3>
        {description && <p className="text-cocoa-500">{description}</p>}
      </div>
      {action && (
        <Button onClick={action.onClick} icon={action.icon}>
          {action.label}
        </Button>
      )}
      {children}
    </div>
  );
}

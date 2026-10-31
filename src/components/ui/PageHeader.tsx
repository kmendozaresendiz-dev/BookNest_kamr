import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        {description && <p className="max-w-xl text-cocoa-500">{description}</p>}
      </div>
      {action}
    </header>
  );
}

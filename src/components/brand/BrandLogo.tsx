import { BookOpen } from 'lucide-react';

interface BrandLogoProps {
  compact?: boolean;
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-200 text-cocoa-700 shadow-sm">
        <BookOpen className="h-5 w-5" aria-hidden="true" />
      </span>
      {!compact && <span className="font-display text-2xl font-semibold text-cocoa-800">BookNest</span>}
    </div>
  );
}

import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number | null;
  onChange?: (value: number | null) => void;
  size?: 'sm' | 'md';
}

export default function StarRating({ value, onChange, size = 'sm' }: StarRatingProps) {
  const current = value ?? 0;
  const iconClass = size === 'md' ? 'h-7 w-7' : 'h-4 w-4';

  if (!onChange) {
    if (!value) return null;
    return (
      <div className="flex items-center gap-0.5 text-cream-700" aria-label={`Calificación: ${value} de 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`${iconClass} ${star <= current ? 'fill-current' : 'text-cocoa-200'}`} aria-hidden="true" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Calificación">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={current === star}
          aria-label={`${star} de 5`}
          onClick={() => onChange(current === star ? null : star)}
          className="rounded-full p-1 text-cream-700 transition hover:scale-110"
        >
          <Star className={`${iconClass} ${star <= current ? 'fill-current' : 'text-cocoa-300'}`} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

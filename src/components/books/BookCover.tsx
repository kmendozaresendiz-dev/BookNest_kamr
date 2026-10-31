import { BookOpen } from 'lucide-react';
import type { Book } from '@/types';

const PLACEHOLDER_TONES = [
  'bg-rose-100 text-cocoa-700',
  'bg-sage-100 text-cocoa-700',
  'bg-lavender-100 text-cocoa-700',
  'bg-cream-100 text-cocoa-700',
];

interface BookCoverProps {
  book: Pick<Book, 'id' | 'title' | 'cover'>;
  className?: string;
}

export default function BookCover({ book, className = '' }: BookCoverProps) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={`Portada de ${book.title}`}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  const tone = PLACEHOLDER_TONES[book.id.charCodeAt(0) % PLACEHOLDER_TONES.length];
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center ${tone} ${className}`}
      aria-label={`Sin portada: ${book.title}`}
    >
      <BookOpen className="h-8 w-8 opacity-70" aria-hidden="true" />
      <span className="line-clamp-3 font-display text-sm font-semibold leading-snug">{book.title}</span>
    </div>
  );
}

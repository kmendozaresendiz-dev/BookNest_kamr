import { Pencil, Quote, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { formatDateTime } from '@/lib/format';
import type { Book, DiaryEntry } from '@/types';

interface DiaryEntryCardProps {
  entry: DiaryEntry;
  book: Book | undefined;
  onEdit: () => void;
  onDelete: () => void;
}

export default function DiaryEntryCard({ entry, book, onEdit, onDelete }: DiaryEntryCardProps) {
  return (
    <article className="card flex flex-col gap-5 p-6 sm:p-8">
      <header className="flex flex-col gap-1">
        <h3 className="text-2xl">{book?.title ?? 'Libro no disponible'}</h3>
        {book?.author && <p className="text-sm text-cocoa-500">{book.author}</p>}
      </header>

      <p className="whitespace-pre-line leading-relaxed text-cocoa-700">{entry.review}</p>

      {entry.quote && (
        <blockquote className="relative rounded-2xl bg-lavender-100 px-5 py-4">
          <Quote className="absolute -top-3 left-4 h-6 w-6 rounded-full bg-white p-1 text-cocoa-500" aria-hidden="true" />
          <p className="font-display italic leading-relaxed text-cocoa-700">“{entry.quote}”</p>
        </blockquote>
      )}

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-cocoa-100 pt-4">
        <time dateTime={entry.createdAt} className="text-sm text-cocoa-400">
          {formatDateTime(entry.createdAt)}
        </time>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" icon={Pencil} onClick={onEdit}>
            Editar
          </Button>
          <Button variant="ghost" size="sm" icon={Trash2} onClick={onDelete} className="text-error hover:bg-rose-100">
            Eliminar
          </Button>
        </div>
      </footer>
    </article>
  );
}

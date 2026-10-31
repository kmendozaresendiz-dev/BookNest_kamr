import { Heart, Pencil, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import BookCover from '@/components/books/BookCover';
import StarRating from '@/components/books/StarRating';
import StatusBadge from '@/components/books/StatusBadge';
import { formatDateRange, formatDateTime } from '@/lib/format';
import type { Book, DiaryEntry } from '@/types';

interface BookDetailModalProps {
  book: Book | null;
  entries: DiaryEntry[];
  onClose: () => void;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
}

export default function BookDetailModal({ book, entries, onClose, onEdit, onDelete }: BookDetailModalProps) {
  if (!book) return null;

  const dates = formatDateRange(book.startDate, book.endDate);

  return (
    <Modal open title={book.title} onClose={onClose} size="lg">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="mx-auto aspect-[2/3] w-44 shrink-0 overflow-hidden rounded-2xl shadow-lift md:mx-0 md:w-52">
          <BookCover book={book} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col gap-1">
            {book.author && <p className="text-base text-cocoa-500">{book.author}</p>}
            {book.genre && <p className="text-sm text-cocoa-400">{book.genre}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={book.status} />
            {book.favorite && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-200 px-3 py-1 text-xs font-medium text-cocoa-800">
                <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                Favorito
              </span>
            )}
          </div>

          <StarRating value={book.rating} size="md" />

          {dates && <p className="text-sm text-cocoa-500">{dates}</p>}

          {book.description ? (
            <p className="whitespace-pre-line leading-relaxed text-cocoa-600">{book.description}</p>
          ) : (
            <p className="text-sm text-cocoa-400">Este libro todavía no tiene descripción.</p>
          )}
        </div>
      </div>

      <section className="mt-8 flex flex-col gap-4 border-t border-cocoa-100 pt-6">
        <h3 className="text-xl">Mis reseñas</h3>
        {entries.length === 0 ? (
          <p className="text-sm text-cocoa-400">Aún no tienes entradas en tu diario para este libro.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {entries.map((entry) => (
              <li key={entry.id} className="rounded-2xl bg-cream-50 p-4">
                <p className="whitespace-pre-line text-sm leading-relaxed text-cocoa-600">{entry.review}</p>
                <p className="mt-2 text-xs text-cocoa-400">{formatDateTime(entry.createdAt)}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-cocoa-100 pt-6 sm:flex-row sm:justify-end">
        <Button variant="ghost" icon={Trash2} onClick={() => onDelete(book)} className="text-error hover:bg-rose-100">
          Eliminar
        </Button>
        <Button variant="secondary" icon={Pencil} onClick={() => onEdit(book)}>
          Editar libro
        </Button>
      </div>
    </Modal>
  );
}

import { Eye, Heart, Pencil, Trash2 } from 'lucide-react';
import type { Book } from '@/types';
import BookCover from '@/components/books/BookCover';
import StatusBadge from '@/components/books/StatusBadge';
import StarRating from '@/components/books/StarRating';

interface BookCardProps {
  book: Book;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function BookCard({ book, onView, onEdit, onDelete }: BookCardProps) {
  return (
    <article className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <button
        type="button"
        onClick={onView}
        className="relative aspect-[2/3] w-full overflow-hidden bg-cocoa-50"
        aria-label={`Consultar ${book.title}`}
      >
        <BookCover book={book} className="transition duration-500 group-hover:scale-105" />
        {book.favorite && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-error shadow-sm">
            <Heart className="h-4 w-4 fill-current" aria-label="Favorito" />
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-lg">{book.title}</h3>
          {book.author && <p className="truncate text-sm text-cocoa-500">{book.author}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={book.status} />
          <StarRating value={book.rating} />
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-3">
          <CardAction label="Consultar" icon={Eye} onClick={onView} />
          <CardAction label="Editar" icon={Pencil} onClick={onEdit} />
          <CardAction label="Eliminar" icon={Trash2} onClick={onDelete} tone="danger" />
        </div>
      </div>
    </article>
  );
}

interface CardActionProps {
  label: string;
  icon: typeof Eye;
  onClick: () => void;
  tone?: 'default' | 'danger';
}

function CardAction({ label, icon: Icon, onClick, tone = 'default' }: CardActionProps) {
  const toneClass = tone === 'danger' ? 'hover:bg-rose-200' : 'hover:bg-lavender-100';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1 rounded-2xl bg-cocoa-50 px-2 py-2.5 text-xs font-medium text-cocoa-700 transition ${toneClass}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}

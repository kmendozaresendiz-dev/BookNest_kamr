import { useMemo, useState } from 'react';
import { BookMarked, Plus, Search, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import PageHeader from '@/components/ui/PageHeader';
import BookCard from '@/components/books/BookCard';
import { useApp } from '@/context/AppContext';
import { STATUS_LABELS, STATUS_OPTIONS } from '@/lib/labels';
import { pluralize } from '@/lib/format';
import type { Book, ReadingStatus } from '@/types';

type StatusFilter = 'todos' | ReadingStatus;

const FILTERS: { id: StatusFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  ...STATUS_OPTIONS.map((status) => ({ id: status, label: STATUS_LABELS[status] })),
];

function normalize(text: string): string {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

export default function LibraryPage() {
  const { data, openBookForm, openBookDetail, requestDeleteBook } = useApp();
  const [filter, setFilter] = useState<StatusFilter>('todos');
  const [query, setQuery] = useState('');

  const books = useMemo(() => [...data.books].sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [data.books]);

  const visibleBooks = useMemo(() => {
    const term = normalize(query);
    return books.filter((book) => {
      if (filter !== 'todos' && book.status !== filter) return false;
      if (!term) return true;
      return normalize(`${book.title} ${book.author}`).includes(term);
    });
  }, [books, filter, query]);

  const countFor = (id: StatusFilter): number =>
    id === 'todos' ? books.length : books.filter((book) => book.status === id).length;

  const isEmptyLibrary = books.length === 0;
  const isSearchEmpty = !isEmptyLibrary && visibleBooks.length === 0;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Mi biblioteca"
        description={
          isEmptyLibrary
            ? 'Organiza tus libros en Leídos, Leyendo o Quiero leer.'
            : `Tienes ${pluralize(books.length, 'libro registrado', 'libros registrados')} en tu biblioteca.`
        }
        action={
          <Button size="lg" icon={Plus} onClick={() => openBookForm()}>
            Agregar libro
          </Button>
        }
      />

      {isEmptyLibrary ? (
        <EmptyState
          icon={BookMarked}
          title="Tu biblioteca está esperando sus primeras historias"
          description="Registra un libro que hayas leído, estés leyendo o quieras leer."
          action={{ label: 'Agregar libro', icon: Plus, onClick: () => openBookForm() }}
        />
      ) : (
        <>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div role="tablist" aria-label="Filtrar por estado" className="flex flex-wrap gap-2">
              {FILTERS.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(item.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      active ? 'bg-cocoa-500 text-white shadow-sm' : 'bg-white text-cocoa-600 hover:bg-cocoa-100'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`rounded-full px-2 text-xs ${active ? 'bg-white/20 text-white' : 'bg-cocoa-100 text-cocoa-600'}`}
                    >
                      {countFor(item.id)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-400" aria-hidden="true" />
              <input
                type="search"
                aria-label="Buscar por título o autor"
                placeholder="Buscar por título o autor"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="field-input rounded-full py-2.5 pl-11 pr-11"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-cocoa-400 transition hover:bg-cocoa-100 hover:text-cocoa-700"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {isSearchEmpty ? (
            <EmptyState
              icon={Search}
              title="No encontramos libros con esa búsqueda"
              description="Prueba con otro título, otro autor o cambia el filtro de estado."
            />
          ) : (
            <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {visibleBooks.map((book: Book) => (
                <li key={book.id}>
                  <BookCard
                    book={book}
                    onView={() => openBookDetail(book.id)}
                    onEdit={() => openBookForm(book.id)}
                    onDelete={() => requestDeleteBook(book.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

import { BookMarked, ChevronRight, LineChart, NotebookPen, Plus, UserRound, type LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import BookCover from '@/components/books/BookCover';
import StatusBadge from '@/components/books/StatusBadge';
import { useApp } from '@/context/AppContext';
import { countBooksByStatus, getReadBooks } from '@/lib/stats';
import type { RouteId } from '@/lib/routes';
import type { Book } from '@/types';

const QUICK_LINKS: { id: RouteId; label: string; description: string; icon: LucideIcon; tone: string }[] = [
  { id: 'biblioteca', label: 'Mi biblioteca', description: 'Todos tus libros', icon: BookMarked, tone: 'bg-lavender-100' },
  { id: 'progreso', label: 'Mi progreso', description: 'Metas y estadísticas', icon: LineChart, tone: 'bg-sage-100' },
  { id: 'diario', label: 'Diario', description: 'Reseñas y frases', icon: NotebookPen, tone: 'bg-cream-100' },
  { id: 'perfil', label: 'Mi perfil', description: 'Tus datos', icon: UserRound, tone: 'bg-rose-100' },
];

const RECENT_LIMIT = 4;
const READING_LIMIT = 3;

export default function HomePage() {
  const { data, openBookForm, openBookDetail } = useApp();
  const { name } = data.profile;
  const books = data.books;

  const readCount = getReadBooks(books).length;
  const readingBooks = books.filter((book) => book.status === 'leyendo');
  const wishlistCount = countBooksByStatus(books, 'quiero');
  const recentBooks = [...books]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, RECENT_LIMIT);

  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl bg-rose-100 p-8 shadow-soft lg:col-span-2 lg:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-rose-200/70" />
          <div className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-cream-200/70" />
          <div className="relative flex max-w-lg flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-cocoa-500">Tu espacio de lectura</p>
            <h1 className="text-4xl md:text-5xl">¡Hola, {name}!</h1>
            <p className="text-lg text-cocoa-600">
              {books.length === 0
                ? 'Tu biblioteca está esperando sus primeras historias.'
                : 'Qué bueno verte de nuevo. Tu próxima historia te espera.'}
            </p>
            <div className="pt-2">
              <Button size="lg" icon={Plus} onClick={() => openBookForm()}>
                Agregar libro
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-sage-100 p-8 shadow-soft">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-cocoa-600">Libros leídos</p>
            <p className="font-display text-6xl font-semibold text-cocoa-800">{readCount}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <MiniStat label="Leyendo" value={readingBooks.length} />
            <MiniStat label="Quiero leer" value={wishlistCount} />
          </div>
        </div>
      </section>

      <section aria-labelledby="quick-access-title" className="flex flex-col gap-4">
        <h2 id="quick-access-title" className="text-2xl">
          Accesos rápidos
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={`#/${link.id}`}
                className="card group flex flex-col gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${link.tone} text-cocoa-700`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-medium text-cocoa-800">{link.label}</span>
                    <span className="text-sm text-cocoa-400">{link.description}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-cocoa-300 transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="reading-title" className="flex flex-col gap-4">
        <SectionTitle id="reading-title" title="Leyendo ahora" href="#/biblioteca" />
        {readingBooks.length === 0 ? (
          <div className="card p-6 text-cocoa-500">
            No tienes libros en lectura por ahora. Cuando empieces uno, aparecerá aquí.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {readingBooks.slice(0, READING_LIMIT).map((book) => (
              <CurrentlyReadingCard key={book.id} book={book} onOpen={() => openBookDetail(book.id)} />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="recent-title" className="flex flex-col gap-4">
        <SectionTitle id="recent-title" title="Últimos libros agregados" href="#/biblioteca" />
        {recentBooks.length === 0 ? (
          <EmptyState
            icon={BookMarked}
            title="Todavía no tienes libros registrados"
            description="Agrega el primero y comienza a construir tu biblioteca personal."
            action={{ label: 'Agregar mi primer libro', icon: Plus, onClick: () => openBookForm() }}
          />
        ) : (
          <ul className="card divide-y divide-cocoa-100 overflow-hidden">
            {recentBooks.map((book) => (
              <li key={book.id}>
                <button
                  type="button"
                  onClick={() => openBookDetail(book.id)}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-cocoa-50 sm:px-6"
                >
                  <span className="h-16 w-11 shrink-0 overflow-hidden rounded-xl shadow-sm">
                    <BookCover book={book} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="truncate font-medium text-cocoa-800">{book.title}</span>
                    <span className="truncate text-sm text-cocoa-500">{book.author || 'Autor sin registrar'}</span>
                  </span>
                  <StatusBadge status={book.status} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-white/70 p-4">
      <span className="text-xs font-medium text-cocoa-500">{label}</span>
      <span className="font-display text-2xl font-semibold text-cocoa-800">{value}</span>
    </div>
  );
}

function SectionTitle({ id, title, href }: { id: string; title: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 id={id} className="text-2xl">
        {title}
      </h2>
      <a href={href} className="inline-flex items-center gap-1 text-sm font-medium text-cocoa-500 transition hover:text-cocoa-800">
        Ver todo
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

function CurrentlyReadingCard({ book, onOpen }: { book: Book; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card flex items-center gap-4 p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="h-20 w-14 shrink-0 overflow-hidden rounded-xl shadow-sm">
        <BookCover book={book} />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="line-clamp-2 font-display text-lg font-semibold text-cocoa-800">{book.title}</span>
        <span className="truncate text-sm text-cocoa-500">{book.author || 'Autor sin registrar'}</span>
      </span>
    </button>
  );
}

import { useMemo, useState } from 'react';
import { BookOpen, NotebookPen, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import EmptyState from '@/components/ui/EmptyState';
import PageHeader from '@/components/ui/PageHeader';
import { useToast } from '@/components/ui/Toast';
import DiaryEntryCard from '@/components/diary/DiaryEntryCard';
import DiaryEntryFormModal from '@/components/diary/DiaryEntryFormModal';
import { useApp } from '@/context/AppContext';
import type { DiaryEntry, DiaryEntryInput } from '@/types';

type FormState = { entry: DiaryEntry | null } | null;

export default function DiaryPage() {
  const { data, actions } = useApp();
  const { notify } = useToast();
  const [formState, setFormState] = useState<FormState>(null);
  const [deleteTarget, setDeleteTarget] = useState<DiaryEntry | null>(null);

  const entries = useMemo(
    () => [...data.entries].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [data.entries],
  );
  const books = useMemo(
    () => [...data.books].sort((a, b) => a.title.localeCompare(b.title, 'es')),
    [data.books],
  );

  const handleSubmit = (input: DiaryEntryInput) => {
    if (formState?.entry) {
      actions.updateEntry(formState.entry.id, input);
      notify('Tu entrada se actualizó.');
    } else {
      actions.addEntry(input);
      notify('Entrada guardada en tu diario.');
    }
    setFormState(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    actions.deleteEntry(deleteTarget.id);
    setDeleteTarget(null);
    notify('Entrada eliminada de tu diario.');
  };

  const hasBooks = books.length > 0;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Mi diario"
        description="Guarda tus reseñas, opiniones y las frases que te acompañan después de leer."
        action={
          hasBooks ? (
            <Button size="lg" icon={Plus} onClick={() => setFormState({ entry: null })}>
              Nueva entrada
            </Button>
          ) : undefined
        }
      />

      {!hasBooks ? (
        <EmptyState
          icon={BookOpen}
          title="Primero registra un libro"
          description="Cada entrada del diario se asocia a un libro de tu biblioteca."
          action={{ label: 'Ir a mi biblioteca', onClick: () => (window.location.hash = '#/biblioteca') }}
        />
      ) : entries.length === 0 ? (
        <EmptyState
          icon={NotebookPen}
          title="Aquí aparecerán tus experiencias de lectura"
          description="Escribe tu primera reseña o guarda una frase que te haya marcado."
          action={{ label: 'Nueva entrada', icon: Plus, onClick: () => setFormState({ entry: null }) }}
        />
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <li key={entry.id}>
              <DiaryEntryCard
                entry={entry}
                book={data.books.find((book) => book.id === entry.bookId)}
                onEdit={() => setFormState({ entry })}
                onDelete={() => setDeleteTarget(entry)}
              />
            </li>
          ))}
        </ul>
      )}

      {formState && (
        <DiaryEntryFormModal
          entry={formState.entry}
          books={books}
          onClose={() => setFormState(null)}
          onSubmit={handleSubmit}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          open
          title="Eliminar entrada"
          message="Esta entrada de tu diario se eliminará. Esta acción no se puede deshacer."
          confirmLabel="Sí, eliminar"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}

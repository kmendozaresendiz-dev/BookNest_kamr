import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useAppData, type AppActions } from '@/hooks/useAppData';
import { useToast } from '@/components/ui/Toast';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import BookDetailModal from '@/components/books/BookDetailModal';
import BookFormModal from '@/components/books/BookFormModal';
import { pluralize } from '@/lib/format';
import type { AppData, BookInput } from '@/types';

type Dialog =
  | { kind: 'form'; bookId: string | null }
  | { kind: 'detail'; bookId: string }
  | { kind: 'delete'; bookId: string }
  | null;

interface AppContextValue {
  data: AppData;
  actions: AppActions;
  openBookForm: (bookId?: string) => void;
  openBookDetail: (bookId: string) => void;
  requestDeleteBook: (bookId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const { notify } = useToast();
  const [dialog, setDialog] = useState<Dialog>(null);

  const handleSaveError = useCallback(
    () => notify('No pudimos guardar tus cambios. Revisa el espacio disponible en tu navegador.', 'error'),
    [notify],
  );
  const { data, actions } = useAppData(handleSaveError);

  const openBookForm = useCallback((bookId?: string) => {
    setDialog({ kind: 'form', bookId: bookId ?? null });
  }, []);

  const openBookDetail = useCallback((bookId: string) => {
    setDialog({ kind: 'detail', bookId });
  }, []);

  const requestDeleteBook = useCallback((bookId: string) => {
    setDialog({ kind: 'delete', bookId });
  }, []);

  const closeDialog = useCallback(() => setDialog(null), []);

  const findBook = (id: string) => data.books.find((book) => book.id === id);

  const formBookId = dialog?.kind === 'form' ? dialog.bookId : null;
  const formBook = formBookId ? findBook(formBookId) ?? null : null;

  const detailBook = dialog?.kind === 'detail' ? findBook(dialog.bookId) ?? null : null;
  const deleteBook = dialog?.kind === 'delete' ? findBook(dialog.bookId) ?? null : null;
  const deleteEntryCount = deleteBook ? data.entries.filter((entry) => entry.bookId === deleteBook.id).length : 0;

  const saveBook = (input: BookInput) => {
    if (formBookId) {
      actions.updateBook(formBookId, input);
      notify('Cambios guardados en tu libro.');
    } else {
      actions.addBook(input);
      notify('Libro agregado a tu biblioteca.');
    }
    closeDialog();
  };

  const confirmDeleteBook = () => {
    if (!deleteBook) return;
    actions.deleteBook(deleteBook.id);
    notify('Libro eliminado de tu biblioteca.');
    closeDialog();
  };

  const value = useMemo<AppContextValue>(
    () => ({
      data,
      actions,
      openBookForm,
      openBookDetail,
      requestDeleteBook,
    }),
    [data, actions, openBookForm, openBookDetail, requestDeleteBook],
  );

  return (
    <AppContext.Provider value={value}>
      {children}

      <BookFormModal
        open={dialog?.kind === 'form'}
        book={formBook}
        onClose={closeDialog}
        onSubmit={saveBook}
      />

      <BookDetailModal
        book={detailBook}
        entries={detailBook ? data.entries.filter((entry) => entry.bookId === detailBook.id) : []}
        onClose={closeDialog}
        onEdit={(book) => openBookForm(book.id)}
        onDelete={(book) => requestDeleteBook(book.id)}
      />

      {deleteBook && (
        <ConfirmDialog
          open
          title="Eliminar libro"
          message={
            deleteEntryCount > 0
              ? `Se eliminará "${deleteBook.title}" junto con ${pluralize(deleteEntryCount, 'entrada de tu diario', 'entradas de tu diario')} relacionadas. Esta acción no se puede deshacer.`
              : `Se eliminará "${deleteBook.title}" de tu biblioteca. Esta acción no se puede deshacer.`
          }
          confirmLabel="Sí, eliminar"
          onConfirm={confirmDeleteBook}
          onCancel={closeDialog}
        />
      )}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp debe usarse dentro de AppProvider');
  return context;
}

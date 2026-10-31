import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Heart, ImagePlus, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';
import Modal from '@/components/ui/Modal';
import BookCover from '@/components/books/BookCover';
import StarRating from '@/components/books/StarRating';
import { STATUS_LABELS, STATUS_OPTIONS } from '@/lib/labels';
import { readImageAsDataUrl } from '@/lib/images';
import type { Book, BookInput, ReadingStatus } from '@/types';

interface BookFormModalProps {
  open: boolean;
  book: Book | null;
  onClose: () => void;
  onSubmit: (input: BookInput) => void;
}

interface FormValues {
  title: string;
  author: string;
  genre: string;
  description: string;
  cover: string;
  status: ReadingStatus;
  startDate: string;
  endDate: string;
  rating: number | null;
  favorite: boolean;
}

type FormErrors = Partial<Record<'title' | 'endDate' | 'cover', string>>;

const TITLE_MAX = 120;

function toFormValues(book: Book | null): FormValues {
  return {
    title: book?.title ?? '',
    author: book?.author ?? '',
    genre: book?.genre ?? '',
    description: book?.description ?? '',
    cover: book?.cover ?? '',
    status: book?.status ?? 'quiero',
    startDate: book?.startDate ?? '',
    endDate: book?.endDate ?? '',
    rating: book?.rating ?? null,
    favorite: book?.favorite ?? false,
  };
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.title.trim()) errors.title = 'Escribe el título del libro.';
  if (values.startDate && values.endDate && values.endDate < values.startDate) {
    errors.endDate = 'La fecha de finalización no puede ser anterior a la de inicio.';
  }
  return errors;
}

export default function BookFormModal({ open, book, onClose, onSubmit }: BookFormModalProps) {
  if (!open) return null;

  return (
    <Modal open={open} title={book ? 'Editar libro' : 'Agregar libro'} onClose={onClose} size="lg">
      <BookForm key={book?.id ?? 'new'} book={book} onClose={onClose} onSubmit={onSubmit} />
    </Modal>
  );
}

function BookForm({ book, onClose, onSubmit }: Omit<BookFormModalProps, 'open'>) {
  const [values, setValues] = useState<FormValues>(() => toFormValues(book));
  const [errors, setErrors] = useState<FormErrors>({});
  const [coverLoading, setCoverLoading] = useState(false);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleCoverChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setCoverLoading(true);
    try {
      const cover = await readImageAsDataUrl(file);
      update('cover', cover);
      setErrors((prev) => ({ ...prev, cover: undefined }));
    } catch {
      setErrors((prev) => ({ ...prev, cover: 'No pudimos usar esa imagen. Intenta con otra foto.' }));
    } finally {
      setCoverLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({
      title: values.title.trim(),
      author: values.author.trim(),
      genre: values.genre.trim(),
      description: values.description.trim(),
      cover: values.cover,
      status: values.status,
      startDate: values.startDate,
      endDate: values.endDate,
      rating: values.rating,
      favorite: values.favorite,
    });
  };

  const showFinishHint = values.status === 'leido' && !values.endDate;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex h-40 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-cocoa-50 shadow-soft">
          <BookCover book={{ id: book?.id ?? 'nuevo', title: values.title || 'Nuevo libro', cover: values.cover }} />
          {coverLoading && (
            <span className="absolute inset-0 flex items-center justify-center bg-white/70 text-sm text-cocoa-600">
              Cargando...
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-cocoa-500">Portada opcional. Puedes subir una foto desde tu equipo.</p>
          <div className="flex flex-wrap gap-2">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-medium text-cocoa-700 transition hover:bg-lavender-200">
              <ImagePlus className="h-4 w-4" aria-hidden="true" />
              {values.cover ? 'Cambiar portada' : 'Subir portada'}
              <input type="file" accept="image/*" className="sr-only" onChange={handleCoverChange} />
            </label>
            {values.cover && (
              <button
                type="button"
                onClick={() => update('cover', '')}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cocoa-600 transition hover:bg-cocoa-100"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Quitar
              </button>
            )}
          </div>
          {errors.cover && (
            <p role="alert" className="text-sm text-error">
              {errors.cover}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <FormField id="book-title" label="Título" required error={errors.title}>
            <input
              id="book-title"
              className="field-input"
              value={values.title}
              maxLength={TITLE_MAX}
              placeholder="Ej. Cien años de soledad"
              onChange={(event) => update('title', event.target.value)}
              autoFocus
            />
          </FormField>
        </div>

        <FormField id="book-author" label="Autor">
          <input
            id="book-author"
            className="field-input"
            value={values.author}
            maxLength={80}
            placeholder="Ej. Gabriel García Márquez"
            onChange={(event) => update('author', event.target.value)}
          />
        </FormField>

        <FormField id="book-genre" label="Género">
          <input
            id="book-genre"
            className="field-input"
            value={values.genre}
            maxLength={40}
            placeholder="Ej. Novela, poesía, fantasía"
            onChange={(event) => update('genre', event.target.value)}
          />
        </FormField>

        <div className="flex flex-col gap-2 md:col-span-2">
          <span className="text-sm font-medium text-cocoa-700">Estado de lectura</span>
          <div className="grid grid-cols-3 gap-2 rounded-full bg-cocoa-50 p-1.5">
            {STATUS_OPTIONS.map((status) => (
              <button
                key={status}
                type="button"
                aria-pressed={values.status === status}
                onClick={() => update('status', status)}
                className={`rounded-full px-3 py-2.5 text-sm font-medium transition ${
                  values.status === status ? 'bg-white text-cocoa-800 shadow-soft' : 'text-cocoa-500 hover:text-cocoa-700'
                }`}
              >
                {STATUS_LABELS[status]}
              </button>
            ))}
          </div>
        </div>

        <FormField id="book-start" label="Fecha de inicio">
          <input
            id="book-start"
            type="date"
            className="field-input"
            value={values.startDate}
            onChange={(event) => update('startDate', event.target.value)}
          />
        </FormField>

        <FormField
          id="book-end"
          label="Fecha de finalización"
          error={errors.endDate}
          hint={showFinishHint ? 'Agrega la fecha para que este libro aparezca en tu progreso.' : undefined}
        >
          <input
            id="book-end"
            type="date"
            className="field-input"
            value={values.endDate}
            min={values.startDate || undefined}
            onChange={(event) => update('endDate', event.target.value)}
          />
        </FormField>

        <div className="flex flex-col gap-2 md:col-span-2">
          <span className="text-sm font-medium text-cocoa-700">Calificación</span>
          <StarRating value={values.rating} onChange={(rating) => update('rating', rating)} size="md" />
        </div>

        <div className="md:col-span-2">
          <FormField id="book-description" label="Descripción">
            <textarea
              id="book-description"
              className="field-input min-h-28 resize-y"
              value={values.description}
              maxLength={1000}
              placeholder="Un resumen breve o por qué te gustó este libro"
              onChange={(event) => update('description', event.target.value)}
            />
          </FormField>
        </div>

        <div className="md:col-span-2">
          <button
            type="button"
            aria-pressed={values.favorite}
            onClick={() => update('favorite', !values.favorite)}
            className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
              values.favorite ? 'bg-rose-200 text-cocoa-800' : 'bg-cocoa-50 text-cocoa-600 hover:bg-rose-100'
            }`}
          >
            <Heart className={`h-5 w-5 ${values.favorite ? 'fill-current' : ''}`} aria-hidden="true" />
            {values.favorite ? 'Marcado como favorito' : 'Marcar como favorito'}
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-cocoa-100 pt-6 sm:flex-row sm:justify-end">
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" disabled={coverLoading}>
          {book ? 'Guardar cambios' : 'Guardar libro'}
        </Button>
      </div>
    </form>
  );
}

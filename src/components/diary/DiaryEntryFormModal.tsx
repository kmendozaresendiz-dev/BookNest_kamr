import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';
import Modal from '@/components/ui/Modal';
import type { Book, DiaryEntry, DiaryEntryInput } from '@/types';

const REVIEW_MAX = 2000;
const QUOTE_MAX = 300;

interface DiaryEntryFormModalProps {
  entry: DiaryEntry | null;
  books: Book[];
  onClose: () => void;
  onSubmit: (input: DiaryEntryInput) => void;
}

interface FormErrors {
  bookId?: string;
  review?: string;
}

export default function DiaryEntryFormModal({ entry, books, onClose, onSubmit }: DiaryEntryFormModalProps) {
  return (
    <Modal open title={entry ? 'Editar entrada' : 'Nueva entrada'} onClose={onClose} size="lg">
      <DiaryEntryForm key={entry?.id ?? 'new'} entry={entry} books={books} onClose={onClose} onSubmit={onSubmit} />
    </Modal>
  );
}

function DiaryEntryForm({ entry, books, onClose, onSubmit }: DiaryEntryFormModalProps) {
  const [bookId, setBookId] = useState(entry?.bookId ?? '');
  const [review, setReview] = useState(entry?.review ?? '');
  const [quote, setQuote] = useState(entry?.quote ?? '');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!bookId) nextErrors.bookId = 'Elige el libro al que se refiere esta entrada.';
    if (!review.trim()) nextErrors.review = 'Escribe tu reseña u opinión.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({ bookId, review: review.trim(), quote: quote.trim() });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <FormField id="entry-book" label="Libro" required error={errors.bookId}>
        <select
          id="entry-book"
          className="field-input appearance-none"
          value={bookId}
          onChange={(event) => {
            setBookId(event.target.value);
            setErrors((prev) => ({ ...prev, bookId: undefined }));
          }}
        >
          <option value="">Elige un libro de tu biblioteca</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
              {book.author ? ` - ${book.author}` : ''}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id="entry-review"
        label="Reseña u opinión"
        required
        error={errors.review}
        hint={`${review.length}/${REVIEW_MAX}`}
      >
        <textarea
          id="entry-review"
          className="field-input min-h-40 resize-y leading-relaxed"
          value={review}
          maxLength={REVIEW_MAX}
          placeholder="¿Qué te pareció? ¿Qué te dejó pensando?"
          onChange={(event) => {
            setReview(event.target.value);
            setErrors((prev) => ({ ...prev, review: undefined }));
          }}
        />
      </FormField>

      <FormField id="entry-quote" label="Frase favorita" hint="Opcional. Guarda ese fragmento que no quieres olvidar.">
        <textarea
          id="entry-quote"
          className="field-input min-h-24 resize-y"
          value={quote}
          maxLength={QUOTE_MAX}
          placeholder="Escribe la frase tal como aparece en el libro"
          onChange={(event) => setQuote(event.target.value)}
        />
      </FormField>

      <div className="flex flex-col-reverse gap-3 border-t border-cocoa-100 pt-6 sm:flex-row sm:justify-end">
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit">{entry ? 'Guardar cambios' : 'Guardar entrada'}</Button>
      </div>
    </form>
  );
}

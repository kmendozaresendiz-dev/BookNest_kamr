import { useRef, useState, type ChangeEvent } from 'react';
import { Camera, Heart, Pencil, RotateCcw, UserRound } from 'lucide-react';
import Button from '@/components/ui/Button';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import PageHeader from '@/components/ui/PageHeader';
import { useToast } from '@/components/ui/Toast';
import BookCover from '@/components/books/BookCover';
import EditTextModal from '@/components/profile/EditTextModal';
import { useApp } from '@/context/AppContext';
import { readImageAsDataUrl } from '@/lib/images';
import { countBooksByStatus, getReadBooks } from '@/lib/stats';

const NAME_MAX = 40;
const BIO_MAX = 300;

type EditingField = 'name' | 'bio' | null;

export default function ProfilePage() {
  const { data, actions, openBookDetail } = useApp();
  const { notify } = useToast();
  const [editing, setEditing] = useState<EditingField>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [photoError, setPhotoError] = useState('');
  const [photoLoading, setPhotoLoading] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const { profile, books } = data;
  const favorites = books.filter((book) => book.favorite);
  const readCount = getReadBooks(books).length;
  const wishlistCount = countBooksByStatus(books, 'quiero');

  const handlePhotoChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setPhotoLoading(true);
    setPhotoError('');
    try {
      const avatar = await readImageAsDataUrl(file);
      actions.updateProfile({ avatar });
      notify('Tu fotografía se actualizó.');
    } catch {
      setPhotoError('No pudimos usar esa imagen. Intenta con otra foto.');
    } finally {
      setPhotoLoading(false);
    }
  };

  const handleSaveName = (value: string) => {
    actions.updateProfile({ name: value });
    setEditing(null);
    notify('Tu nombre se actualizó.');
  };

  const handleSaveBio = (value: string) => {
    actions.updateProfile({ bio: value });
    setEditing(null);
    notify('Tu descripción se guardó.');
  };

  const handleReset = () => {
    setConfirmReset(false);
    actions.resetAll();
    notify('Todos tus datos se borraron.', 'info');
  };

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Mi perfil" description="Tu información personal y un resumen de tu espacio de lectura." />

      <section className="card flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:items-start sm:text-left lg:p-10">
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-32 w-32 overflow-hidden rounded-full bg-rose-100 shadow-lift">
            {profile.avatar ? (
              <img src={profile.avatar} alt={`Fotografía de ${profile.name}`} className="h-full w-full object-cover" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-cocoa-600">
                <UserRound className="h-12 w-12" aria-hidden="true" />
              </span>
            )}
            {photoLoading && (
              <span className="absolute inset-0 flex items-center justify-center bg-white/70 text-sm text-cocoa-600">
                Cargando...
              </span>
            )}
          </div>
          <Button variant="secondary" size="sm" icon={Camera} onClick={() => photoInputRef.current?.click()}>
            Cambiar fotografía
          </Button>
          <input
            ref={photoInputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handlePhotoChange}
            aria-label="Seleccionar fotografía"
          />
          {photoError && (
            <p role="alert" className="max-w-[12rem] text-sm text-error">
              {photoError}
            </p>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="break-words text-3xl">{profile.name}</h2>
            <Button variant="ghost" size="sm" icon={Pencil} onClick={() => setEditing('name')}>
              Cambiar nombre
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <p className={`leading-relaxed ${profile.bio ? 'text-cocoa-600' : 'text-cocoa-400'} whitespace-pre-line`}>
              {profile.bio || 'Agrega una descripción breve sobre ti y tus gustos de lectura.'}
            </p>
            <div>
              <Button variant="secondary" size="sm" icon={Pencil} onClick={() => setEditing('bio')}>
                Editar descripción
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3 sm:gap-6" aria-label="Resumen de tu biblioteca">
        <ProfileStat label="Libros registrados" value={books.length} tone="bg-lavender-100" />
        <ProfileStat label="Libros leídos" value={readCount} tone="bg-sage-100" />
        <ProfileStat label="Por leer" value={wishlistCount} tone="bg-cream-100" />
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="favorites-title">
        <h2 id="favorites-title" className="flex items-center gap-2 text-2xl">
          <Heart className="h-5 w-5 fill-current text-error" aria-hidden="true" />
          Libros favoritos
        </h2>
        {favorites.length === 0 ? (
          <div className="card p-6 text-cocoa-500">
            Marca tus libros favoritos desde Mi biblioteca y aparecerán aquí.
          </div>
        ) : (
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {favorites.map((book) => (
              <li key={book.id}>
                <button
                  type="button"
                  onClick={() => openBookDetail(book.id)}
                  className="group flex w-full flex-col gap-2 text-left"
                  aria-label={`Consultar ${book.title}`}
                >
                  <span className="block aspect-[2/3] w-full overflow-hidden rounded-2xl shadow-soft transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lift">
                    <BookCover book={book} />
                  </span>
                  <span className="line-clamp-2 text-sm font-medium text-cocoa-700">{book.title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-4 rounded-3xl border border-rose-200 bg-rose-100/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Empezar de nuevo</h2>
          <p className="text-sm text-cocoa-600">
            Borra tus libros, reseñas y datos del perfil de este navegador. Después podrás escribir tu nombre otra vez.
          </p>
        </div>
        <Button variant="danger" icon={RotateCcw} onClick={() => setConfirmReset(true)} className="shrink-0">
          Borrar todos los datos
        </Button>
      </section>

      {editing === 'name' && (
        <EditTextModal
          title="Cambiar nombre"
          label="Tu nombre"
          initialValue={profile.name}
          maxLength={NAME_MAX}
          required
          onClose={() => setEditing(null)}
          onSave={handleSaveName}
        />
      )}

      {editing === 'bio' && (
        <EditTextModal
          title="Editar descripción"
          label="Descripción personal"
          initialValue={profile.bio}
          maxLength={BIO_MAX}
          multiline
          placeholder="Cuéntanos qué te gusta leer"
          onClose={() => setEditing(null)}
          onSave={handleSaveBio}
        />
      )}

      <ConfirmDialog
        open={confirmReset}
        title="Borrar todos los datos"
        message="Se eliminarán tu nombre, tu foto, tu descripción, tu biblioteca, tu diario y tu meta anual. Esta acción no se puede deshacer."
        confirmLabel="Sí, borrar todo"
        onConfirm={handleReset}
        onCancel={() => setConfirmReset(false)}
      />
    </div>
  );
}

function ProfileStat({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className={`flex flex-col gap-1 rounded-3xl p-4 sm:p-6 ${tone}`}>
      <span className="text-xs font-medium text-cocoa-600 sm:text-sm">{label}</span>
      <span className="font-display text-3xl font-semibold text-cocoa-800 sm:text-4xl">{value}</span>
    </div>
  );
}

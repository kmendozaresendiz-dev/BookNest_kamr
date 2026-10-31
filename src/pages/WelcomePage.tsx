import { useState, type FormEvent } from 'react';
import { ArrowRight, Feather, Heart, Library } from 'lucide-react';
import BrandLogo from '@/components/brand/BrandLogo';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';
import { useApp } from '@/context/AppContext';
import { useToast } from '@/components/ui/Toast';

const NAME_MAX = 40;

export default function WelcomePage() {
  const { actions } = useApp();
  const { notify } = useToast();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Escribe tu nombre para comenzar.');
      return;
    }
    actions.updateProfile({ name: trimmed });
    notify(`¡Qué bueno tenerte aquí, ${trimmed}!`);
    window.location.hash = '#/inicio';
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-50 px-4 py-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose-200/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-sage-200/80 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-lavender-200/70 blur-3xl" />

      <div className="relative flex w-full max-w-md animate-slide-up flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="scale-125">
            <BrandLogo />
          </div>
          <p className="font-display text-xl italic text-cocoa-500">Tu espacio, tus libros, tus historias</p>
        </div>

        <div className="card flex w-full flex-col gap-6 p-8 sm:p-10">
          <div className="flex flex-col gap-3 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 text-cocoa-600">
              <Feather className="h-5 w-5" aria-hidden="true" />
            </div>
            <h1 className="text-3xl">Bienvenida a tu biblioteca</h1>
            <p className="text-cocoa-500">
              Organiza tus lecturas, registra lo que descubres en cada página y guarda tus experiencias como lector.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <FormField id="welcome-name" label="¿Cómo te llamas?" required error={error}>
              <input
                id="welcome-name"
                className="field-input text-center text-lg"
                value={name}
                maxLength={NAME_MAX}
                placeholder="Escribe tu nombre"
                autoComplete="given-name"
                autoFocus
                onChange={(event) => {
                  setName(event.target.value);
                  if (error) setError('');
                }}
              />
            </FormField>

            <Button type="submit" size="lg" icon={Library} className="w-full">
              Comenzar a leer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>

        <p className="flex items-center gap-2 text-sm text-cocoa-400">
          <Heart className="h-4 w-4" aria-hidden="true" />
          Tus datos se guardan solo en este navegador.
        </p>
      </div>
    </div>
  );
}

import { useState, type FormEvent } from 'react';
import { BookCheck, Pencil, Target, Trophy } from 'lucide-react';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';
import Modal from '@/components/ui/Modal';
import PageHeader from '@/components/ui/PageHeader';
import { useApp } from '@/context/AppContext';
import { useToast } from '@/components/ui/Toast';
import { countFinishedByMonth, countFinishedInYear, getReadBooks, MONTH_LABELS } from '@/lib/stats';
import { pluralize } from '@/lib/format';

const GOAL_MIN = 1;
const GOAL_MAX = 365;

export default function ProgressPage() {
  const { data, actions } = useApp();
  const [goalOpen, setGoalOpen] = useState(false);
  const { notify } = useToast();

  const year = new Date().getFullYear();
  const totalRead = getReadBooks(data.books).length;
  const finishedThisYear = countFinishedInYear(data.books, year);
  const monthlyCounts = countFinishedByMonth(data.books, year);
  const goal = data.annualGoal;
  const percent = Math.min(100, Math.round((finishedThisYear / goal) * 100));
  const remaining = Math.max(0, goal - finishedThisYear);

  const handleSaveGoal = (value: number) => {
    actions.setAnnualGoal(value);
    setGoalOpen(false);
    notify('Tu meta anual se actualizó.');
  };

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Mi progreso"
        description="Mira cuánto has leído este año y celebra cada libro terminado."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 rounded-3xl bg-sage-100 p-8 shadow-soft lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-cocoa-600">Meta de lectura {year}</p>
              <p className="font-display text-4xl font-semibold text-cocoa-800">
                {finishedThisYear} <span className="text-2xl text-cocoa-500">de {goal} libros</span>
              </p>
            </div>
            <Button variant="secondary" size="sm" icon={Pencil} onClick={() => setGoalOpen(true)}>
              Editar meta
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="h-4 w-full overflow-hidden rounded-full bg-white/80"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label="Avance de la meta anual"
            >
              <div
                className="h-full rounded-full bg-cocoa-500 transition-all duration-700 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-cocoa-600">
              <span>{percent}% completado</span>
              <span>
                {remaining > 0
                  ? `Te faltan ${pluralize(remaining, 'libro', 'libros')}`
                  : '¡Meta cumplida!'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <StatCard icon={BookCheck} label="Total de libros leídos" value={totalRead} tone="bg-lavender-100" />
          <StatCard icon={Trophy} label={`Terminados en ${year}`} value={finishedThisYear} tone="bg-rose-100" />
        </div>
      </section>

      <section className="card flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-1">
          <h2 className="flex items-center gap-2 text-2xl">
            <Target className="h-5 w-5 text-cocoa-500" aria-hidden="true" />
            Libros terminados por mes
          </h2>
          <p className="text-sm text-cocoa-500">
            Se cuentan los libros marcados como Leídos según su fecha de finalización.
          </p>
        </div>
        <MonthlyChart counts={monthlyCounts} hasData={finishedThisYear > 0} />
      </section>

      {goalOpen && (
        <GoalModal currentGoal={goal} onClose={() => setGoalOpen(false)} onSave={handleSaveGoal} />
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof BookCheck;
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <div className="card flex flex-1 items-center gap-4 p-6">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone} text-cocoa-700`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col">
        <span className="text-sm text-cocoa-500">{label}</span>
        <span className="font-display text-3xl font-semibold text-cocoa-800">{value}</span>
      </div>
    </div>
  );
}

function MonthlyChart({ counts, hasData }: { counts: number[]; hasData: boolean }) {
  const maxCount = Math.max(1, ...counts);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-6 gap-x-2 gap-y-6 sm:grid-cols-12 sm:gap-x-3">
        {counts.map((count, index) => {
          const height = count === 0 ? 4 : Math.max(12, Math.round((count / maxCount) * 100));
          return (
            <div key={MONTH_LABELS[index]} className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-cocoa-600">{count > 0 ? count : ''}</span>
              <div className="flex h-40 w-full items-end sm:h-52">
                <div
                  className={`w-full origin-bottom animate-grow-up rounded-t-xl ${count > 0 ? 'bg-sage-300' : 'bg-cocoa-100'}`}
                  style={{ height: `${height}%` }}
                  title={`${MONTH_LABELS[index]}: ${pluralize(count, 'libro', 'libros')}`}
                />
              </div>
              <span className="text-xs text-cocoa-500">{MONTH_LABELS[index]}</span>
            </div>
          );
        })}
      </div>
      {!hasData && (
        <p className="text-center text-sm text-cocoa-500">
          Aquí aparecerán tus libros terminados este año. Marca un libro como Leído y agrega su fecha de finalización.
        </p>
      )}
    </div>
  );
}

function GoalModal({
  currentGoal,
  onClose,
  onSave,
}: {
  currentGoal: number;
  onClose: () => void;
  onSave: (value: number) => void;
}) {
  const [value, setValue] = useState(String(currentGoal));
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < GOAL_MIN || parsed > GOAL_MAX) {
      setError(`Escribe un número entero entre ${GOAL_MIN} y ${GOAL_MAX}.`);
      return;
    }
    onSave(parsed);
  };

  return (
    <Modal open title="Meta anual de lectura" onClose={onClose} size="sm">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <FormField id="goal-input" label="¿Cuántos libros quieres leer este año?" required error={error}>
          <input
            id="goal-input"
            type="number"
            inputMode="numeric"
            min={GOAL_MIN}
            max={GOAL_MAX}
            className="field-input"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError('');
            }}
            autoFocus
          />
        </FormField>
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Guardar meta</Button>
        </div>
      </form>
    </Modal>
  );
}

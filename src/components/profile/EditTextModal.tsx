import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';
import Modal from '@/components/ui/Modal';

interface EditTextModalProps {
  title: string;
  label: string;
  initialValue: string;
  maxLength: number;
  multiline?: boolean;
  required?: boolean;
  placeholder?: string;
  onClose: () => void;
  onSave: (value: string) => void;
}

export default function EditTextModal({
  title,
  label,
  initialValue,
  maxLength,
  multiline = false,
  required = false,
  placeholder,
  onClose,
  onSave,
}: EditTextModalProps) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (required && !trimmed) {
      setError('Este campo no puede quedar vacío.');
      return;
    }
    onSave(trimmed);
  };

  const sharedProps = {
    id: 'profile-text',
    value,
    maxLength,
    placeholder,
    className: 'field-input',
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
      if (error) setError('');
    },
  };

  return (
    <Modal open title={title} onClose={onClose} size="sm">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <FormField id="profile-text" label={label} required={required} error={error} hint={`${value.length}/${maxLength}`}>
          {multiline ? (
            <textarea {...sharedProps} className="field-input min-h-32 resize-y leading-relaxed" autoFocus />
          ) : (
            <input {...sharedProps} autoFocus />
          )}
        </FormField>
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Modal>
  );
}

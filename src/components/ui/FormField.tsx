import type { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export default function FormField({ id, label, error, hint, required, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-cocoa-700">
        {label}
        {required && <span className="ml-1 text-error">*</span>}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      ) : (
        hint && <p className="text-sm text-cocoa-400">{hint}</p>
      )}
    </div>
  );
}

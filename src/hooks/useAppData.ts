import { useCallback, useEffect, useState } from 'react';
import { createEmptyData, loadAppData, saveAppData } from '@/lib/storage';
import type {
  AppData,
  Book,
  BookInput,
  DiaryEntry,
  DiaryEntryInput,
  Profile,
} from '@/types';

function createId(): string {
  return crypto.randomUUID();
}

export function useAppData(onSaveError: () => void) {
  const [data, setData] = useState<AppData>(loadAppData);

  useEffect(() => {
    if (!saveAppData(data)) onSaveError();
  }, [data, onSaveError]);

  const addBook = useCallback((input: BookInput) => {
    const now = new Date().toISOString();
    const book: Book = { ...input, id: createId(), createdAt: now, updatedAt: now };
    setData((prev) => ({ ...prev, books: [book, ...prev.books] }));
  }, []);

  const updateBook = useCallback((id: string, input: BookInput) => {
    setData((prev) => ({
      ...prev,
      books: prev.books.map((book) =>
        book.id === id ? { ...book, ...input, updatedAt: new Date().toISOString() } : book,
      ),
    }));
  }, []);

  const deleteBook = useCallback((id: string) => {
    setData((prev) => ({
      ...prev,
      books: prev.books.filter((book) => book.id !== id),
      entries: prev.entries.filter((entry) => entry.bookId !== id),
    }));
  }, []);

  const addEntry = useCallback((input: DiaryEntryInput) => {
    const now = new Date().toISOString();
    const entry: DiaryEntry = { ...input, id: createId(), createdAt: now, updatedAt: now };
    setData((prev) => ({ ...prev, entries: [entry, ...prev.entries] }));
  }, []);

  const updateEntry = useCallback((id: string, input: DiaryEntryInput) => {
    setData((prev) => ({
      ...prev,
      entries: prev.entries.map((entry) =>
        entry.id === id ? { ...entry, ...input, updatedAt: new Date().toISOString() } : entry,
      ),
    }));
  }, []);

  const deleteEntry = useCallback((id: string) => {
    setData((prev) => ({ ...prev, entries: prev.entries.filter((entry) => entry.id !== id) }));
  }, []);

  const updateProfile = useCallback((patch: Partial<Profile>) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, ...patch } }));
  }, []);

  const setAnnualGoal = useCallback((goal: number) => {
    setData((prev) => ({ ...prev, annualGoal: goal }));
  }, []);

  const resetAll = useCallback(() => {
    setData(createEmptyData());
  }, []);

  return {
    data,
    actions: {
      addBook,
      updateBook,
      deleteBook,
      addEntry,
      updateEntry,
      deleteEntry,
      updateProfile,
      setAnnualGoal,
      resetAll,
    },
  };
}

export type AppActions = ReturnType<typeof useAppData>['actions'];

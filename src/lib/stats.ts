import type { Book, ReadingStatus } from '@/types';

export const MONTH_LABELS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export function getReadBooks(books: Book[]): Book[] {
  return books.filter((book) => book.status === 'leido');
}

export function countBooksByStatus(books: Book[], status: ReadingStatus): number {
  return books.filter((book) => book.status === status).length;
}

export function countFinishedInYear(books: Book[], year: number): number {
  return getReadBooks(books).filter((book) => book.endDate.startsWith(`${year}-`)).length;
}

export function countFinishedByMonth(books: Book[], year: number): number[] {
  const counts = new Array<number>(12).fill(0);
  for (const book of getReadBooks(books)) {
    if (!book.endDate.startsWith(`${year}-`)) continue;
    const monthIndex = Number(book.endDate.slice(5, 7)) - 1;
    counts[monthIndex] += 1;
  }
  return counts;
}

export type ReadingStatus = 'leido' | 'leyendo' | 'quiero';

export interface Book {
  id: string;
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
  createdAt: string;
  updatedAt: string;
}

export type BookInput = Omit<Book, 'id' | 'createdAt' | 'updatedAt'>;

export interface DiaryEntry {
  id: string;
  bookId: string;
  review: string;
  quote: string;
  createdAt: string;
  updatedAt: string;
}

export type DiaryEntryInput = Omit<DiaryEntry, 'id' | 'createdAt' | 'updatedAt'>;

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
}

export interface AppData {
  profile: Profile;
  books: Book[];
  entries: DiaryEntry[];
  annualGoal: number;
}

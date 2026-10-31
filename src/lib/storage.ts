import type { AppData } from '@/types';

const STORAGE_KEY = 'booknest:data:v1';

export const DEFAULT_ANNUAL_GOAL = 12;

export function createEmptyData(): AppData {
  return {
    profile: { name: '', bio: '', avatar: '' },
    books: [],
    entries: [],
    annualGoal: DEFAULT_ANNUAL_GOAL,
  };
}

export function loadAppData(): AppData {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createEmptyData();

  try {
    const parsed = JSON.parse(raw) as Partial<AppData>;
    const empty = createEmptyData();
    return {
      profile: { ...empty.profile, ...parsed.profile },
      books: Array.isArray(parsed.books) ? parsed.books : [],
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
      annualGoal:
        typeof parsed.annualGoal === 'number' && parsed.annualGoal > 0
          ? parsed.annualGoal
          : DEFAULT_ANNUAL_GOAL,
    };
  } catch {
    return createEmptyData();
  }
}

export function saveAppData(data: AppData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

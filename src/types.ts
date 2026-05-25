export type ProgramGoal = 'FAT_LOSS' | 'RECOMP' | 'LEAN_BULK';

export interface LanguageProps {
  lang: 'es' | 'en';
}

export interface MacroResult {
  calories: number;
  protein: number; // grams
  carbs: number;   // grams
  fats: number;    // grams
}

export interface ClientCase {
  id: string;
  name: string;
  role: string;
  age: number;
  duration: string;
  metricDelta: string;
  secondaryMetric: string;
  quote: string;
  image: string;
  pillarFocus: string;
}

export interface RoadmapPhase {
  weeks: string;
  title: string;
  subtitle: string;
  focus: string;
  nutrition: string;
  training: string;
  metrics: string;
}

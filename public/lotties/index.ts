export type TKeyOfDefaultLottie =
  | 'clap'
  | 'emptyBox'
  | 'matching'
  | 'study'
  | 'teacher'
  | 'sad'
  | 'try'
  | 'piPlus'
  | 'trophy'
  | 'goal';

export type Assets = {
  [key in TKeyOfDefaultLottie]: () => Promise<{ default: object }>;
};

const defaultLottie: Assets = {
  clap: () => import('@public/lotties/clap.json'),
  emptyBox: () => import('@public/lotties/emptyBox.json'),
  matching: () => import('@public/lotties/matching.json'),
  study: () => import('@public/lotties/study.json'),
  teacher: () => import('@public/lotties/teacher.json'),
  sad: () => import('@public/lotties/sad.json'),
  try: () => import('@public/lotties/try.json'),
  piPlus: () => import('@public/lotties/pi-plus.json'),
  trophy: () => import('@public/lotties/trophy.json'),
  goal: () => import('@public/lotties/goal.json'),
};
export default defaultLottie;

import clapLottie from './clap.json';
import emptyLottie from './emptyBox.json';
import goalLottie from './goal.json';
import matchingLottie from './matching.json';
import piPlusLottie from './pi-plus.json';
import sadLottie from './sad.json';
import studyLottie from './study.json';
import teacherLottie from './teacher.json';
import trophyLottie from './trophy.json';
import tryLottie from './try.json';

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
  [key in TKeyOfDefaultLottie]: object;
};

export const defaultLottie: Assets = {
  clap: clapLottie,
  emptyBox: emptyLottie,
  matching: matchingLottie,
  study: studyLottie,
  teacher: teacherLottie,
  sad: sadLottie,
  try: tryLottie,
  piPlus: piPlusLottie,
  trophy: trophyLottie,
  goal: goalLottie,
};

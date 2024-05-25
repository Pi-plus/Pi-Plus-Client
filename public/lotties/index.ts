import clapLottie from './clap.json';
import emptyLottie from './emptyBox.json';
import matchingLottie from './matching.json';
import sadLottie from './sad.json';
import studyLottie from './study.json';
import teacherLottie from './teacher.json';
import tryLottie from './try.json';

type TKeyOfDefaultLottie = 'clap' | 'emptyBox' | 'matching' | 'study' | 'teacher' | 'sad' | 'try';

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
};

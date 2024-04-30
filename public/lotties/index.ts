import clapLottie from './clap.json';

type TKeyOfDefaultLottie = 'clap';

export type Assets = {
  [key in TKeyOfDefaultLottie]: object;
};

export const defaultLottie: Assets = {
  clap: clapLottie,
};

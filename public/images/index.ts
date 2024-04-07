type TKeyOfDefaultImages = 'logo';

export type Assets = {
  [key in TKeyOfDefaultImages]: string;
};

export const defaultImages: Assets = {
  logo: '/images/header-logo.png',
};

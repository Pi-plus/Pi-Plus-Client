type TKeyOfDefaultImages = 'logo' | 'banner1' | 'banner2' | 'banner3';

export type Assets = {
  [key in TKeyOfDefaultImages]: string;
};

export const defaultImages: Assets = {
  logo: '/images/header-logo.png',
  banner1: '/images/banner1.png',
  banner2: '/images/banner2.png',
  banner3: '/images/banner3.png',
};

import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/noto-sans-kr-v36-korean-regular.woff2', weight: '400' },
    { path: '../../public/fonts/noto-sans-kr-v36-korean-regular.woff2', weight: '500' },
    { path: '../../public/fonts/noto-sans-kr-v36-korean-700.woff2', weight: '700' },
  ],
});

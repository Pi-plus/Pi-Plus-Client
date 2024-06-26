type TKeyOfDefaultImages =
  | 'logo'
  | 'banner1'
  | 'banner2'
  | 'banner3'
  | 'onboarding1'
  | 'onboarding2'
  | 'onboarding3'
  | 'book'
  | 'studyStudent'
  | 'girlStudent'
  | 'boyStudent'
  | 'studentTeacher';

export type Assets = {
  [key in TKeyOfDefaultImages]: string;
};

export const defaultImages: Assets = {
  logo: '/images/header-logo.png',
  banner1: '/images/banner1.png',
  banner2: '/images/banner2.png',
  banner3: '/images/banner3.png',

  onboarding1: '/images/onboarding1.png',
  onboarding2: '/images/onboarding2.png',
  onboarding3: '/images/onboarding3.png',

  book: '/images/book.png',
  studyStudent: '/images/study-student.png',

  girlStudent: '/images/student1.png',
  boyStudent: '/images/student2.png',
  studentTeacher: '/images/student-teacher.png',
} as const;

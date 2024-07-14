export type TTabContent = {
  label: string;
  href: string;
  baseUrl: string;
  hasArrow?: boolean;
};

export type TFocusTab = '' | '문제 풀기' | '개념학습';

export type THoverValueOfStudent = 'middle' | 'high' | '';
export type TValueOfStudent = 'middle' | 'high';

export type TStudentContent = {
  label: string;
  href?: string;
  query?: string;
};

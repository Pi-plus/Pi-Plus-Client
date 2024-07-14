export type TTabContent = {
  label: string;
  href: string;
  baseUrl: string;
  hasArrow?: boolean;
};

export type TFocusTab = string;

export type THoverValueOfStudent = 'middle' | 'high' | '';
export type TValueOfStudent = 'middle' | 'high';

export type TStudentContent = {
  label: string;
  href?: string;
  query?: string;
};

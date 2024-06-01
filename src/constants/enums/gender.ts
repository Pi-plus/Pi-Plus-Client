/**
 * @description 성별에 따른 enum 생성
 */
export enum USER_GENDER {
  'male' = '남자',
  'female' = '여자',
}
export type TUserGenderKeys = keyof typeof USER_GENDER;
export type TUserGenderValues = '남자' | '여자';

export type FormErrors<T> = {
  [K in keyof T]: { errors: string[] };
};

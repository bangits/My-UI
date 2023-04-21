export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type Never<T> = { [P in keyof T]?: never };

export type Nullable<T> = T | null;

export type ObjKey<T extends Record<string, unknown>> = keyof T;

export type ArrayValues<T extends readonly unknown[]> = T[number];

export type ReactHTML = keyof React.ReactHTML;

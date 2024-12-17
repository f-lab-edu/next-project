export type Size = (typeof size)[number];

export const size = ["1", "2", "3", "4"] as const;

export type Radius = "none" | "small" | "medium" | "large" | "full";

export type ValuePerSize = Record<Size, string | number>;

export type ValuePerRadius = Record<Radius, string | number>;

import { ObjKey } from "@/shared/lib";

export const screenBreakPointsWithNumber = {
  sm: 720,
  md: 1100,
  lg: 1360,
} as const;

export const screenBreakPoints = Object.entries(screenBreakPointsWithNumber).reduce(
  (prev, [key, value]) => {
    return { ...prev, [key]: `${value}px` };
  },
  {} as Record<ObjKey<typeof screenBreakPointsWithNumber>, string>,
);

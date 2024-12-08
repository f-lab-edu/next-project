import { PolyMorphismPropsWithoutRef } from "../../types";

export interface CheckboxContext {
  disabled?: boolean;
  checked?: boolean;
}

export interface CheckboxRootProps extends PolyMorphismPropsWithoutRef<"div"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
}

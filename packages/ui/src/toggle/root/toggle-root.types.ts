import { PolyMorphismPropsWithoutRef } from "../../types";

export interface ToggleRootProps extends PolyMorphismPropsWithoutRef<"button"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onToggleChanged?: (value: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}

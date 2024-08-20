import { assignInlineVars } from "@vanilla-extract/dynamic";

import * as styles from "./col.css";
import { ColProps } from "./col.types";

export default function Col({ children, sm = 4, md = 12, lg = 12 }: ColProps) {
  return (
    <div
      className={styles.col}
      style={assignInlineVars({
        [styles.lgWidthVar]: String(lg),
        [styles.mdWidthVar]: String(md),
        [styles.smWidthVar]: String(sm),
      })}
    >
      {children}
    </div>
  );
}

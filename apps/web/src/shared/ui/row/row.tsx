import { PropsWithChildren } from "react";

import * as styles from "./row.css";

export default function Row({ children }: PropsWithChildren) {
  return <div className={styles.row}>{children}</div>;
}

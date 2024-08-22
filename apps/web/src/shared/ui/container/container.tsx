import { PropsWithChildren } from "react";

import * as styles from "./container.css";

export default function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}

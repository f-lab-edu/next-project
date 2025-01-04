import { useEffect, useState } from "react";

import { screenBreakPointsWithNumber } from "@/shared/styles";

export const useVirtualizerOptions = () => {
  const [lanes, setLanes] = useState(4);
  const [overscan, setOverscan] = useState(3);

  const getCurrentWindowSize = () => {
    if (window.innerWidth > screenBreakPointsWithNumber.md) {
      setLanes(4);
      setOverscan(4);
    } else if (
      window.innerWidth > screenBreakPointsWithNumber.sm &&
      window.innerWidth <= screenBreakPointsWithNumber.md
    ) {
      setLanes(3);
      setOverscan(3);
    } else {
      setLanes(1);
      setOverscan(20);
    }
  };

  const handleWindowSizeChange = (e: UIEvent) => {
    const window = e.currentTarget;

    if (!(window instanceof Window)) return;

    getCurrentWindowSize();
  };

  useEffect(() => {
    getCurrentWindowSize();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    lanes,
    overscan,
  };
};

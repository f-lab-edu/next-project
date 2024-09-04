import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeProps = (...props: Record<string, any>[]) => {
  const result = { ...props[0] };

  for (let i = 1; i < props.length; i++) {
    const currentProp = props[i];

    if (!currentProp) {
      continue;
    }

    Object.keys(currentProp).forEach((key) => {
      const originPropValue = result[key];
      const currentPropValue = currentProp[key];

      // event handler
      if (typeof originPropValue === "function" && typeof currentPropValue === "function" && /^on[A-Z]/.test(key)) {
        result[key] = (...args: unknown[]) => {
          originPropValue(...args);
          currentPropValue(...args);
        };
        // className
      } else if (key === "className") {
        result[key] = clsx(originPropValue, currentPropValue);
      } else if (key === "style") {
        result[key] = { ...originPropValue, ...currentPropValue };
      }
    });
  }

  return result;
};

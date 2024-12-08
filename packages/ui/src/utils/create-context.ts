import React from "react";

export interface CreateContextOptions<DefaultValue> {
  strict?: boolean;
  contextName?: string;
  consumerHookName?: string;
  errorMessage?: string;
  defaultValue?: DefaultValue;
}

export const createContext = <T>(contextOptions: CreateContextOptions<T> = {}) => {
  const {
    strict = true,
    contextName = "Context",
    consumerHookName = "useContext",
    errorMessage,
    defaultValue,
  } = contextOptions;

  const Context = React.createContext(defaultValue);

  Context.displayName = contextName;

  const useContext = () => {
    const context = React.useContext(Context);

    if (strict && !context) {
      const error = new Error(
        errorMessage ?? `${consumerHookName}은(는) ${contextName} Provider 내부에서만 사용할 수 있습니다.`,
      );
      error.name = "ContextError";
      throw error;
    }

    return context;
  };

  return [Context.Provider, useContext, Context] as const;
};

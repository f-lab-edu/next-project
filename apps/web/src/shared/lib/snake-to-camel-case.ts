import { upperFirst } from "./upper-first";

export const snakeToCamelCase = (snakeCaseWord: string) => {
  const splittedWord = snakeCaseWord.split("_");

  return splittedWord.reduce((prevWord, curWord, index) => {
    return `${prevWord}${index ? upperFirst(curWord) : curWord}`;
  }, "");
};

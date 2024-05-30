export const snakeToTitleCase = (str: string): string => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

type GetLetters = () => string[];
export const getLetters: GetLetters = () => Array
  .from(Array(26))
  .map((_, i) => String.fromCharCode(i + 65));

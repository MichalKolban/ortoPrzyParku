export const unifyPriceTileTitle = (str) => {
  const words = str.trim().toLowerCase().split(/\s+/);
  if (words.length === 1) {
    return words[0];
  }
  const formatted =
    words[0] +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  return formatted;
};

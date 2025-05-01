const validator = {
  hasNonNumericValue(number: string) {
    if (isNaN(Number(number))) return true;
    return false;
  },

  hasIncorrectLength(number: string, length: number) {
    if (number.length !== length) return true;
    return false;
  },
};

export default validator;

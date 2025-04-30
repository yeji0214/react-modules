const validator = {
  hasIncorrectLength(numbers: string[], maxLength: number) {
    return numbers.some((number) => number.length !== maxLength);
  },

  hasNonNumericValue(numbers: string[]) {
    return numbers.some((number) => isNaN(Number(number)));
  },
};

export default validator;

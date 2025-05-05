import { EXPIRATION } from "../constants/cardValidationInfo";

const validator = {
  hasNonNumericValue(number: string) {
    return isNaN(Number(number));
  },

  hasIncorrectLength(number: string, length: number) {
    return number.length !== length;
  },

  isInValidMonth(month: string) {
    return (
      Number(month) < EXPIRATION.MONTH.MIN ||
      Number(month) > EXPIRATION.MONTH.MAX
    );
  },

  isInValidYear(year: string) {
    return Number(year) < EXPIRATION.YEAR.CURRENT;
  },
};

export default validator;

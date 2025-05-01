import { EXPIRATION } from "../constants/cardValidationInfo";

const validator = {
  hasNonNumericValue(number: string) {
    if (isNaN(Number(number))) return true;
    return false;
  },

  hasIncorrectLength(number: string, length: number) {
    if (number.length !== length) return true;
    return false;
  },

  isInValidMonth(month: string) {
    if (
      Number(month) < EXPIRATION.MONTH.MIN ||
      Number(month) > EXPIRATION.MONTH.MAX
    )
      return true;
    return false;
  },

  isInValidYear(year: string) {
    if (Number(year) < EXPIRATION.YEAR.CURRENT) return true;
    return false;
  },
};

export default validator;

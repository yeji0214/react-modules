import { CARD_BRAND, EXPIRATION } from "../constants/cardValidationInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

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

  isValidCardStartNumber(number: string) {
    if (number.length > 0) {
      if (
        Number(number[0]) !== CARD_BRAND.VISA_START_NUMBER &&
        (Number(number.slice(0, 2)) < CARD_BRAND.MASTER_MIN_START_NUMBER ||
          Number(number.slice(0, 2)) > CARD_BRAND.MASTER_MAX_START_NUMBER)
      )
        return false;
    }
    return true;
  },

  validateFirstCardNumbers(number: string) {
    if (!validator.isValidCardStartNumber(number))
      return {
        isValidCardCompany: false,
        idx: 0,
        helperText: ERROR_MESSAGE.CARD_NUMBER.INVALID,
      };
    return {
      isValidCardCompany: true,
      idx: null,
      helperText: "",
    };
  },
};

export default validator;

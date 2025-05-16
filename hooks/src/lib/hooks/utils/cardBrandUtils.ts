export const getCardNumberMaxLength = (brand: string | null): number => {
  switch (brand) {
    case "AMEX":
      return 15;
    case "DINERS":
      return 14;
    case "UNIONPAY":
    case "VISA":
    case "MASTERCARD":
      return 16;
    default:
      return 19;
  }
};

export const validateCardNumberForBrand = (
  number: string,
  brand: string
): boolean => number.length === getCardNumberMaxLength(brand);

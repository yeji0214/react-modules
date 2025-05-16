import { CARD_BRAND_REGEX } from "../constants/cardValidationInfo";

export const detectCardCompany = (cardNumber: string): string | null => {
  for (const { brand, pattern } of CARD_BRAND_REGEX) {
    if (pattern.test(cardNumber)) return brand;
  }
  return null;
};

const useCardBrand = (cardNumber: string) => {
  return detectCardCompany(cardNumber);
};

export default useCardBrand;

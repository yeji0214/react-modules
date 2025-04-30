reimport validator from "./utils/validate";

type CardNumberProps = {
  numbers: string[];
  maxLength: number;
};

type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};

const useCardNumber = ({
  numbers,
  maxLength,
}: CardNumberProps): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  if (validator.hasInvalidNumber(numbers, maxLength)) {
    result.isValid = false;
    result.errorMessage = `숫자 ${maxLength}자를 입력해주세요.`;
  }

  return result;
};

export default useCardNumber;

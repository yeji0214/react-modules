import { useState } from "react";
import validator from "../utils/validate.ts";

export type CardNumberState = {
  numbers: string[];
  isValid: boolean;
  errorMessage: string;
  inputValue: string;
};

interface Props {
  cardNumberState: CardNumberState;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardNumberInput = (): Props => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>({
    numbers: [],
    isValid: false,
    errorMessage: "",
    inputValue: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numbers = inputValue.split(",").map((num) => num.trim());

    let isValid = true;
    let errorMessage = "";
    const maxLength = 4;

    if (validator.hasIncorrectLength(numbers, maxLength)) {
      isValid = false;
      errorMessage = "길이가 올바르지 않은 숫자가 있습니다.";
    } else if (validator.hasNonNumericValue(numbers)) {
      isValid = false;
      errorMessage = "숫자가 아닌 값이 있습니다.";
    }

    setCardNumberState({
      numbers,
      isValid,
      errorMessage,
      inputValue,
    });
  };

  return {
    cardNumberState,
    handleInputChange,
  };
};

export default useCardNumberInput;

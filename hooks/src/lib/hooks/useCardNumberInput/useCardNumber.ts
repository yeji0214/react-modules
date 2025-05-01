import { useState } from "react";
import validator from "../utils/validate";

export type CardNumberState = {
  value: string;
  isValid: boolean;
};

interface Props {
  cardNumberState: CardNumberState[];
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const INPUT_COUNT = 4;
const MAX_LENGTH = 4;

const useCardNumberInput = (): Props => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState[]>(
    Array.from({ length: INPUT_COUNT }, () => ({ value: "", isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorMessage = "";

    if (validator.hasNonNumericValue(inputValue)) {
      isValid = false;
      errorMessage = "숫자가 아닌 값이 있습니다.";
    } else if (validator.hasIncorrectLength(inputValue, MAX_LENGTH)) {
      isValid = false;
      errorMessage = `숫자 ${MAX_LENGTH}자를 입력해주세요.`;
    }

    const updatedState = cardNumberState.map((item, i) =>
      i === index ? { value: inputValue, isValid } : item
    );

    setCardNumberState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
  };
};

export default useCardNumberInput;

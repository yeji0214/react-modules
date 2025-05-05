import { useState } from "react";
import validator from "../utils/validate";
import { CARD_INPUT } from "../constants/cardValidationInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

type CardNumberState = {
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

const useCardNumberInput = (): Props => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState[]>(
    Array.from({ length: CARD_INPUT.NUMBER_INPUTS }, () => ({
      value: "",
      isValid: true,
    }))
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
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (
      validator.hasIncorrectLength(inputValue, CARD_INPUT.MAX_LENGTH.CARD)
    ) {
      isValid = false;
      errorMessage = `숫자 ${CARD_INPUT.MAX_LENGTH.CARD}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`;
    }

    setCardNumberState((prev) =>
      prev.map((item, i) =>
        i === index ? { value: inputValue, isValid } : item
      )
    );
    setErrorMessage(errorMessage);
  };

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
  };
};

export default useCardNumberInput;

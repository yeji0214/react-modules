import { useState } from "react";
import validator from "../utils/validate";
import { CARD_INPUT } from "../constants/cardValidationInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

type CardNumberState = {
  value: string;
  isValid: boolean;
};

type CardNumberErrorState = {
  index: number | null;
  message: string;
};

interface Props {
  cardNumberState: CardNumberState[];
  errorState: CardNumberErrorState;
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

  const [errorState, setErrorState] = useState<CardNumberErrorState>({
    index: null,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorIndex = null;
    let errorMessage = "";

    if (index === 0) {
      const { isValidCardCompany, idx, helperText } =
        validator.validateFirstCardNumbers(inputValue);
      isValid = isValidCardCompany;
      errorIndex = idx;
      errorMessage = helperText;
    }

    if (validator.hasNonNumericValue(inputValue)) {
      isValid = false;
      errorIndex = index;
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (
      validator.hasIncorrectLength(inputValue, CARD_INPUT.MAX_LENGTH.CARD)
    ) {
      isValid = false;
      errorIndex = index;
      errorMessage = `숫자 ${CARD_INPUT.MAX_LENGTH.CARD}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`;
    }

    setCardNumberState((prev) =>
      prev.map((item, i) =>
        i === index ? { value: inputValue, isValid } : item
      )
    );

    setErrorState({ index, message: errorMessage });
  };

  return {
    cardNumberState,
    errorState,
    handleInputChange,
  };
};

export default useCardNumberInput;

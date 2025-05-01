import { useState } from "react";
import validator from "../utils/validate";
import { CARD_INPUT } from "../constants/cardValidationInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

type cvcState = {
  value: string;
  isValid: boolean;
};

interface Props {
  cvcState: cvcState;
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCVCInput = (): Props => {
  const [cvcState, setCVCState] = useState<cvcState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorMessage = "";

    if (validator.hasNonNumericValue(inputValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (
      validator.hasIncorrectLength(inputValue, CARD_INPUT.MAX_LENGTH.CVC)
    ) {
      isValid = false;
      errorMessage = `숫자 ${CARD_INPUT.MAX_LENGTH.CVC}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`;
    }

    const updatedState = { value: inputValue, isValid };

    setCVCState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    cvcState,
    errorMessage,
    handleInputChange,
  };
};

export default useCVCInput;

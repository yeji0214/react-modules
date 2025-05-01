import React from "react";
import useCVCInput from "./lib/hooks/useCVCInput/useCVCInput";

const CVCInput = () => {
  const { cvcState, errorMessage, handleInputChange } = useCVCInput();

  return (
    <div>
      <label htmlFor="cvc">CVC 번호</label>
      <input
        id="cvc"
        type="text"
        maxLength={3} // 일반적으로 CVC는 3자리
        value={cvcState.value}
        onChange={handleInputChange}
        placeholder="123"
        style={{
          borderColor: cvcState.isValid ? "black" : "red",
        }}
      />
      {!cvcState.isValid && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default CVCInput;

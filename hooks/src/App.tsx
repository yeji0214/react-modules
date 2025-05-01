import React from "react";
import useExpiryDateInput from "./lib/hooks/useExpiryDateInput/useExpiryDateInput";


function App() {
  const { expiryDateState, errorMessage, handleInputChange } = useExpiryDateInput();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>카드 유효기간 입력</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        {expiryDateState.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(e, index)}
            maxLength={2}
            placeholder={index === 0 ? "MM" : "YY"}
            style={{
              width: "3rem",
              padding: "0.5rem",
              borderColor: input.isValid ? "black" : "red",
            }}
          />
        ))}
      </div>

      {errorMessage && (
        <p style={{ color: "red", marginTop: "1rem" }}>{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
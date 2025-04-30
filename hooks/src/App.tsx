import useCardNumberInput from "./lib/hooks/useCardNumberInput/useCardNumber";

function App() {
  const { cardNumberState, handleInputChange } = useCardNumberInput();

  console.log(cardNumberState);

  return (
    <>
      <input 
        value={cardNumberState.inputValue}
        onChange={handleInputChange}
        placeholder="숫자를 콤마로 구분하여 입력하세요"
      />
      <h2>유효성: {cardNumberState.isValid ? "유효함" : "유효하지 않음"}</h2>
      <p>오류 메시지: {cardNumberState.errorMessage}</p>
    </>
  );
}

export default App;
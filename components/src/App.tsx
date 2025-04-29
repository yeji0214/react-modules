import { useState } from "react";
import Modal from "./lib/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  return (
    <>
    <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && <Modal />}
    </>
  );
}

export default App;

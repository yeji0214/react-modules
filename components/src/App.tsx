import { useState } from "react";
import Modal from "./lib/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <>
    <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && <Modal onClose={handleCloseModal} title="제목" position="center" content="내용"/>}
    </>
  );
}

export default App;

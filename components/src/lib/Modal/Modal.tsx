import styled from "@emotion/styled";
import CloseButton from "../components/CloseButton/CloseButton";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";
import CancelButton from "../components/CancelButton/CancelButton";
import Input from "../components/Input/Input";

type ModalProps = {
  type?: "alert" | "confirm" | "prompt";
  position?: "center" | "bottom" | "top";
  title?: string;
  content?: React.ReactNode;
  handleBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  inputTitle?: string;
};

const Modal = ({
  type = "alert",
  position = "center",
  title = "알림",
  content = "내용이 없습니다.",
  handleBackdropClick,
  hasCloseButton = true,
  onClose,
  onConfirm,
  confirmText = "확인",
  cancelText = "취소",
  inputTitle = "입력해주세요.",
}: ModalProps) => {
  return (
    <Overlay>
      <Wrapper position={position} onClick={handleBackdropClick}>
        <ModalContainer
          position={position}
          onClick={(e) => e.stopPropagation()}
        >
          {type !== "prompt" && (
            <>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <CloseButtonWrapper>
                  {hasCloseButton && <CloseButton onClose={onClose} />}
                </CloseButtonWrapper>
              </ModalHeader>
              <ModalContent>{content}</ModalContent>
            </>
          )}

          {type === "prompt" && (
            <InputContainer>
              <Input title={inputTitle} />
            </InputContainer>
          )}

          <ModalFooter>
            {type === "alert" && (
              <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
            )}

            {type === "confirm" && (
              <Buttons>
                <CancelButton cancelText={cancelText} onClick={onClose} />
                <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
              </Buttons>
            )}

            {type === "prompt" && (
              <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
            )}
          </ModalFooter>
        </ModalContainer>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Wrapper = styled.div<{ position: "center" | "bottom" | "top" }>`
  display: flex;
  justify-content: center;
  align-items: ${({ position }) =>
    position === "bottom"
      ? "flex-end"
      : position === "top"
      ? "flex-start"
      : "center"};
  width: 100%;
  height: 100%;
`;

const borderRadiusMap: Record<"center" | "bottom" | "top", string> = {
  center: "8px",
  bottom: "8px 8px 0 0",
  top: "0 0 8px 8px",
};

const ModalContainer = styled.div<{ position: "center" | "bottom" | "top" }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ position }) => borderRadiusMap[position]};
  width: 304px;
  min-height: 216px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px 32px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 24px;
`;

const ModalFooter = styled.div`
  margin-top: auto;
  text-align: center;
  justify-content: flex-end;
`;

const Buttons = styled.div`
  display: flex;
  gap: 7px;
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

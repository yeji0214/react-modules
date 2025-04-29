import CloseButton from "../../components/CloseButton/CloseButton";
import ConfirmButton from "../../components/ConfirmButton/ConfirmButton";
import styles from "./Modal.module.css";

type ModalProps = {
  position: "center" | "bottom" | "top";
  title: string;
  content: React.ReactNode;
  hasCloseButton: boolean;
  onClose: () => void;
  handleBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  confirmText?: string;
  onConfirm?: () => void;
};

const Modal = ({
  position,
  title,
  content,
  hasCloseButton,
  onClose,
  handleBackdropClick,
  confirmText = "확인",
  onConfirm,
}: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.wrapper} ${styles[position]}`}
        onClick={handleBackdropClick}
      >
        <div className={styles["modal-container"]}>
          <div className={styles["modal-header"]}>
            <h2 className={styles["modal-title"]}>{title}</h2>
            <div className={styles["close-button-wrapper"]}>
              {hasCloseButton && <CloseButton onClose={onClose} />}
            </div>
          </div>
          <div className={styles["modal-content"]}>{content}</div>
          <div className={styles["modal-footer"]}>
            {onConfirm && <ConfirmButton confirmText={confirmText} onClick={onConfirm}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

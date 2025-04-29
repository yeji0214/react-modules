import CloseButton from "../../components/CloseButton";
import styles from "./Modal.module.css";

type ModalProps = {
  title: string;
  onClose: () => void;
};

const Modal = ({ title, onClose }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-header"]}>
          <h2 className={styles["modal-title"]}>{title}</h2>
          <div className={styles["close-button-wrapper"]}>
          <CloseButton onClose={onClose} /></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

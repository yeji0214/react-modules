import CloseButton from "../../components/CloseButton";
import styles from "./Modal.module.css";

type ModalProps = {
  position: "center" | "bottom" | "top";
  title: string;
  content: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ position, title, content, onClose }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.wrapper} ${styles[position]}`}>
        <div className={styles["modal-container"]}>
          <div className={styles["modal-header"]}>
            <h2 className={styles["modal-title"]}>{title}</h2>
            <div className={styles["close-button-wrapper"]}>
              <CloseButton onClose={onClose} />
            </div>
          </div>
          <div className={styles["modal-content"]}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

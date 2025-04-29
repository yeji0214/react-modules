import CloseButton from "../../components/CloseButton";
import styles from "./Modal.module.css";

type ModalProps = {
    title: string,
}

const Modal = ({title}:ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-header"]}>
          <h2 className={styles["modal-title"]}>{title}</h2>
          <CloseButton/></div>
          
      </div>
      
    </div>
  );
};

export default Modal;

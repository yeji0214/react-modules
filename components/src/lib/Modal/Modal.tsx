import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles["modal-container"]}></div>
    </div>
  );
};

export default Modal;

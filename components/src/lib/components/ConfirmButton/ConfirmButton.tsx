import styles from "./ConfirmButton.module.css"

type confirmButtonProps = {
  confirmText: string
  onClick: () => void;
}

const ConfirmButton = ({confirmText, onClick}: confirmButtonProps) => {
  return (<button className={styles["confirm-button"]} onClick={onClick}>{confirmText}</button>
    )
}

export default ConfirmButton
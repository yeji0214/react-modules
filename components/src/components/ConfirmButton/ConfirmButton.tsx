import styles from "./ConfirmButton.module.css"

type confirmButtonProps = {
  confirmText: string
}

const ConfirmButton = ({confirmText}: confirmButtonProps) => {
  return (<button className={styles["confirm-button"]}>{confirmText}</button>
    )
}

export default ConfirmButton
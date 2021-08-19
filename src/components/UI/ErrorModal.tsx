import React from "react";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

interface IProp {
    title: string,
    message: string,
    onConfirm: () => void
}

const ErrorModal = (props: IProp) => {

    return (
        <React.Fragment>
            <div className={styles["backdrop"]} onClick={props.onConfirm}/>
            <div className={styles["modal"]}>
                <header className={styles["header"]}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles["content"]}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles["actions"]}>
                    <Button onClick={props.onConfirm}>Got it!</Button>
                </footer>
            </div>
        </React.Fragment>

    )
}

export default ErrorModal;
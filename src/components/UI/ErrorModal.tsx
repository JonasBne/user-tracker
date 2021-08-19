import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

interface IProp {
    title: string,
    message: string,
    onConfirm: () => void
}

const Backdrop = (props: any) => {
    return <div className={styles["backdrop"]} onClick={props.onConfirm}/>;
}

const ModalOverlay = (props: IProp) => {
    return <div className={styles["modal"]}>
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
}

const ErrorModal = (props: IProp) => {

    return (
        <React.Fragment>
            { ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root")! as HTMLDivElement)}
            { ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root")! as HTMLDivElement)}
        </React.Fragment>
    )
}

export default ErrorModal;
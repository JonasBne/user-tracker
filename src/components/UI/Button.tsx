import styles from "./Button.module.css";

const Button = (props: any) => {
    return (
        <button className={styles["button"]} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;
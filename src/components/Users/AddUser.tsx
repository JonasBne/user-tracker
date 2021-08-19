import React, {FormEvent, useRef, useState} from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";


interface IProps {
    onAddNewUser: (generatedId: string, enteredName: string, enteredAge: string) => void;
}

const AddUser = (props: IProps) => {
    const nameInputRef = useRef<any>();
    const ageInputRef = useRef<any>();

    const [errorMessage, setErrorMessage] = useState({title: "", message: ""});
    const [showErrorModal, setShowErrorModal] = useState(false);

    function formSubmitHandler(ev: FormEvent) {
        ev.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || parseInt(enteredUserAge) < 1) {
            setErrorMessage({
                title: "Invalid input!",
                message: "Please enter a valid name and age (non-empty values)."
            });
            setShowErrorModal(true);
            return;
        } else {
            props.onAddNewUser(Math.random().toString(), enteredName, enteredUserAge);

            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        }
    }

    const errorHandler = () => {
        setShowErrorModal(false)
    }

    return (
        <React.Fragment>
            {showErrorModal ?  <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/> : null}
            <Card className={styles["card"]}>
                <h3 className={styles["user-input-header"]}>User Input</h3>
                <form className={styles["form-control"]} onSubmit={formSubmitHandler}>
                    <label htmlFor={"input-username"} className={styles["label"]}> Username
                        <input className={styles["input"]} id={"input-username"} type={"text"}  ref={nameInputRef}/></label>
                    <label htmlFor={"input-age"} className={styles["label"]}> Age (years)
                        <input className={styles["input"]} id={"input-age"} type={"number"}  ref={ageInputRef}/></label>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </React.Fragment>

    )
}

export default AddUser;
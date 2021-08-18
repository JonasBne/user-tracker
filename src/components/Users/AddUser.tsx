import React, {ChangeEvent, FormEvent, useState} from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";


interface IProps {
    onAddNewUser: (generatedId: string, enteredName: string, enteredAge: string) => void;
}

const AddUser = (props: IProps) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorMessage, setErrorMessage] = useState({title: "", message: ""});
    const [showErrorModal, setShowErrorModal] = useState(false);


    function userNameChangeHandler(ev: ChangeEvent<HTMLInputElement>) {
            setEnteredUserName(ev.target.value)
    }

    function ageChangeHandler(ev: ChangeEvent<HTMLInputElement>) {
            setEnteredAge(ev.target.value)
    }

    function formSubmitHandler(ev: FormEvent) {
        ev.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || parseInt(enteredAge) < 1) {
            setErrorMessage({
                title: "Invalid input!",
                message: "Please enter a valid name and age (non-empty values)."
            });
            setShowErrorModal(true);
            return;
        } else {
            props.onAddNewUser(Math.random().toString(), enteredUserName, enteredAge);

            setEnteredUserName('');
            setEnteredAge('');
        }
    }

    const errorHandler = () => {
        setShowErrorModal(false)
    }

    return (
        <div>
            {showErrorModal ?  <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/> : null}
            <Card className={styles["card"]}>
                <h3 className={styles["user-input-header"]}>User Input</h3>
                <form className={styles["form-control"]} onSubmit={formSubmitHandler}>
                    <label htmlFor={"input-username"} className={styles["label"]}> Username
                        <input className={styles["input"]} id={"input-username"} type={"text"} onChange={userNameChangeHandler} value={enteredUserName}/></label>
                    <label htmlFor={"input-age"} className={styles["label"]}> Age (years)
                        <input className={styles["input"]} id={"input-age"} type={"number"} onChange={ageChangeHandler} value={enteredAge}/></label>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </div>

    )
}

export default AddUser;
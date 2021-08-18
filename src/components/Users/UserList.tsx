import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

interface IProps {
    userData: Object[]
}

const UserList = (props: IProps) => {
    const userData = props.userData;

    return (
        <Card className={styles["card"]}>
            <h3 className={styles["user-list-header"]}>Users</h3>
            <ul className={styles["user-list"]}>
                {
                    userData.map((user: any) => {
                        return <li key={user.id} className={styles["user-list-item"]}>{`${user.username} (${user.age} years old)`}</li>
                    })
                }
            </ul>
        </Card>
    )
}

export default UserList;
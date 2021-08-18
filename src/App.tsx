import React, {useState} from 'react';
import './App.css';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const userArr: Object[] = [];

const App = () => {
  const [usersList, setUsersList] = useState(userArr);

    const addUserInfoHandler = (generatedId: string, enteredName: string, enteredAge: string) => {
        setUsersList(prevUsersList => {
            return [...prevUsersList, {id: generatedId, username: enteredName, age: enteredAge}]
        });
    }

  return (
    <div className="App">
      <AddUser onAddNewUser={addUserInfoHandler}/>
      <UserList userData={usersList}/>
    </div>
  );
}

export default App;

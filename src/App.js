import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { getUser } from "./services/userService";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // Fetch users on component mount
    getUser()
      .then((response) => {
        setUserList(response.data.allUsers);
      })
      .catch((error) => console.error(error));
  }, [userList]);
  
  return (
    <div className="app">
      <Form />
      <UserList users={userList} />
    </div>
  );
}

export default App;

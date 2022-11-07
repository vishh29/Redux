import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addUser, deleteUser, updateUser} from "./features/Users"

function App() {
  const users = useSelector((state) => state.users.value);
  console.log(users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <br />
        <button onClick={()=>dispatch(addUser({id:users[users.length-1].id+1, name, username}))}>Add User</button>
      </div>
      <div>
        {users.map((user) => (
          <div className="users" key={user.id}>
            <div className="card">
              <h2>Name : {user.name}</h2>
              <h3>Username : {user.username}</h3>
            </div>
            <div>
              <input type="text" placeholder="Enter new username" onChange={(e) => setNewUsername(e.target.value)} />
              <button  onClick={()=>dispatch(updateUser({id:user.id , newUsername}))}>Update User</button>
              <button onClick={()=>dispatch(deleteUser(user.id))}>Delete User</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

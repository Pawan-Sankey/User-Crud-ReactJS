import React, { useState } from "react";
import Users from "../components/Users";
import { } from "./App.css";

const App = () => {

  const [items, setItems] = useState([
    { id: 1, username: "Anonymous", email: "anon@gmail.com" },
    { id: 2, username: "Mondeo", email: "mondeo@example.com" },
  ]);

  const [isEdit, setEdit] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);



  const showUserForm = () => {
    if (document.getElementById("userForm").style.display === "none")
      document.getElementById("userForm").style.display = "flex";
    else
      document.getElementById("userForm").style.display = "none";

  }

  const updateUser = (e) => {
    e.preventDefault(); // prevent default events, disable to submit the form in backend and browser will not refresh

    var id = document.getElementById("user_id").value;
    var username = document.getElementById("username").value;
    var user_email = document.getElementById("user_email").value;

    let newArr = [...items]; // copying the old datas array
    newArr[updateIndex] = { id: id, username: username, email: user_email };

    setItems(newArr);
    setEdit(false);

    document.getElementById("user_id").readOnly = false;
    
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
      );

  }

  const editUser = (index) => {

    setUpdateIndex(index)
    setEdit(true);

    document.getElementById("user_id").readOnly = true;
    document.getElementById("user_id").value = items[index].id;
    document.getElementById("username").value = items[index].username;
    document.getElementById("user_email").value = items[index].email;
    
  }

  const userDelete = (index) => {
    setItems((prevData) => [...prevData.slice(0, index), ...prevData.slice(index + 1, prevData.length)])

    // console.log(index);
    // setItems((prevData) => [...prevData, prevData.splice(index, 1)]);
    
    console.log("My Items: ", items);
    
  }

  const addUser = (e) => {

    e.preventDefault();

    var id = document.getElementById("user_id").value;
    var username = document.getElementById("username").value;
    var user_email = document.getElementById("user_email").value;


    setItems((prevData) => [...prevData, { id: id, username: username, email: user_email }])

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );

    console.log("My Items: ", items);

  };

  return (
    <div>
      <h1 className="header">USER CRUD APP</h1>
      <button className="addUser-btn" onClick={showUserForm}>Add User</button>
      <form id="userForm" onSubmit={isEdit ? updateUser : addUser} >
        <div className="user_id">
          <label>
            Enter User Id
          </label>
          <input type="number" name="user_id" id="user_id" value={items.id} />
        </div>
        <div className="username">
          <label>
            Enter the Username
          </label>
          <input type="text" name="username" id="username" />
        </div>

        <div className="user_email">
          <label>
            Enter User Email
          </label>
          <input type="text" name="user_email" id="user_email" />
        </div>
        <button className="submit-btn">Submit</button>
      </form>

      <Users myItems={items} updateUser={editUser} deleteUser={userDelete}></Users>
    </div>
  );
};

export default App;

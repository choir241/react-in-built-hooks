"use client";
import { useReducer, useState } from "react";
import { userReducer, initialUsers } from "./hooks/reducer";
import type { IUser } from "./components/User";
import { User } from "./components/User";

export default function App() {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [user, setUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(3);

  function handleChange(e) {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  function addUser(user: IUser) {
    const newId = id + 1;
    setId(newId);
    dispatch({
      type: "added",
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      userId: id,
    });
  }

  function editUser(user: IUser) {
    dispatch({
      type: "changed",
      user: user,
    });
  }

  function removeUser(userId: string) {
    dispatch({
      type: "deleted",
      userId: userId,
    });
  }

  return (
    <main>
      <form>
        <label htmlFor="">First Name</label>
        <input name="firstName" onChange={(e) => handleChange(e)} />
        <label htmlFor="">Last Name</label>
        <input name="lastName" onChange={(e) => handleChange(e)} />
        <label htmlFor="">User Name</label>
        <input name="userName" onChange={(e) => handleChange(e)} />

        <button
          onClick={(e) => {
            e.preventDefault();
            addUser(user);
            setUser({ userId: "", firstName: "", lastName: "", userName: "" });
          }}
        >
          Add
        </button>
      </form>
      {users.map((user: IUser) => {
        return (
          <section key={user.userId}>
            {User({ user, editUser, isEditing, setIsEditing, removeUser })}
          </section>
        );
      })}
    </main>
  );
}

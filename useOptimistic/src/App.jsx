import { useOptimistic, useState, startTransition } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  
  const [optimisticUsers, addOptimisticUser] = useOptimistic(
    users,
    (currentUsers, newUser) => [
      {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: newUser.userName,
      },
      ...currentUsers,
    ]
  );

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      userName: formData.get("userName"),
    };

    startTransition(()=>addOptimisticUser(newUser));
    setUsers((prev) => [newUser, ...prev]);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName"  />
        <label>Last Name</label>
        <input type="text" name="lastName" />
        <label>User Name</label>
        <input type="text" name="userName" />
        <button type="submit">Submit</button>
      </form>

      {optimisticUsers.map((user) => (
        <div>
          <h2>{user.firstName && user.lastName ? user.firstName + " " + user.lastName : "Loading..."}</h2>
        </div>
      ))}
    </>
  );
}

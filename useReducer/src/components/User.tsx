export interface IUser{
    userId: string,
    firstName: string,
    lastName: string,
    userName: string
}

export function User({user, editUser, isEditing, setIsEditing, removeUser}:{user: IUser, editUser: (e: IUser)=>void, isEditing: boolean, setIsEditing: (e:boolean)=>void, removeUser: (e: string)=>void}) {
  let textContent;
  if (isEditing) {
    textContent = (
      <>
        <input
          value={user.firstName}
          onChange={(e) => {
            editUser({
              ...user,
              firstName: e.target.value,
            });
          }}
        />
        <input
          value={user.lastName}
          onChange={(e) => {
            editUser({
              ...user,
              lastName: e.target.value,
            });
          }}
        />
        <input
          value={user.userName}
          onChange={(e) => {
            editUser({
              ...user,
              userName: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    textContent = (
      <>
        <span>{user.userName}</span>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      {textContent}
      <button onClick={() => removeUser(user.userId)}>delete</button>
    </>
  );
}

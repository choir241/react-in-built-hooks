import type { IUser } from "../components/User";

export function userReducer(state: IUser[], action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          userId: action.userId,
          firstName: action.firstName,
          lastName: action.lastName,
          userName: action.userName,
        },
      ];
    }
    case "changed": {
      return state.map((user: IUser) => {
        if (user.userId === action.user.userId) {
          return action.user;
        } else {
          return user;
        }
      });
    }
    case "deleted": {
      return state.filter((user: IUser) => user.userId !== action.userId);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialUsers = [
  {
    userId: 1,
    userName: "hatsune12",
    firstName: "Hatsune",
    lastName: "Miku",
  },
  {
    userId: 2,
    userName: "choir24",
    firstName: "Richard",
    lastName: "Choi",
  },
];

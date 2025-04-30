"use client";
import React, { useActionState } from "react";
import { UserContext } from "./context";
import Home from "./home/page";
import { addAccount } from "./about/page";

export default function Menu() {
  const [account, accountAction, isPending] = useActionState(addAccount, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{account, accountAction, isPending}}>
      <Home />
    </UserContext.Provider>
  );
}

"use client";
import { useContext } from "react";
import { UserContext } from "../context";
import Contact from "../contact/page";

export default function Home() {
  const {account, accountAction, isPending} = useContext(UserContext);

  return (
    <>
      {account.name ? (
          <Contact />
      ) : isPending ? (
        <h1>Loading...</h1>
      ) : (
        <form className="form" action={accountAction}>
          <label className="mb-2">Name</label>
          <input type="text" name="name" className="mb-4"/>
          <label className="mb-2">Email</label>
          <input type="email" name="email" className="mb-4"/>
          <label className="mb-2">Password</label>
          <input type="password" name="password" className="mb-6" />
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      )}
    </>
  );
}

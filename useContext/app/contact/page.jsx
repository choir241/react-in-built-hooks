"use client"
import {useContext} from "react";
import { UserContext } from "../context";

export default function Contact(){

    const {account} = useContext(UserContext);

    return(
        <main>
            <h1>Welcome {account.name}!</h1>
            <h2>{account.email}</h2>
        </main>
    )
}
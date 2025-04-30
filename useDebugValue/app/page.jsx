"use client"
import {onlineCheck} from "./components/OnlineCheck";

export default function Home(){

    return(
        <main>
            {onlineCheck()}
        </main>
    )
}
import { createContext } from "react";


type T = {
    theme: string,
    setTheme: (e:string) => void
};

export const DarkThemeContext = createContext<T>({
    theme: "light",
    setTheme: (e: string) => e
})
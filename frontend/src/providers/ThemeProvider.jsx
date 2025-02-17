import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){

    const getInitialTheme = ()=>{

        if(typeof window === "undefined") return "light";

        const storedTheme = localStorage.getItem("theme");
return storedTheme ? storedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(()=>{

        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);

    },[theme])



    return(
        <ThemeContext.Provider value = {{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}


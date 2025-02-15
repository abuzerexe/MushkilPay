import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggle(){

    const getInitialTheme = ()=>{
        const storedTheme = localStorage.getItem("theme")
        
        if(storedTheme) return storedTheme === "dark"
        console.log("racher")


        return window.matchMedia("(prefers-color-scheme : dark)").matches;
    }


    
    
    const [darkMode,setDarkMode ] = useState(getInitialTheme);

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light")
        }
    },[darkMode])

    return (
        <button onClick={()=>{
            setDarkMode(!darkMode)
        }}             className={` border-2 mr-5 p-4 rounded-full transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}>
            {
                darkMode ? (<  SunIcon className="w-6 h-6 text-yellow-400"/>) : (<MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-800"/>)
            }
        </button>
    )
}
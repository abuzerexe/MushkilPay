import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";

export default function DarkModeToggle(){


    
    const {theme, setTheme} = useTheme();

    return (
        <button onClick={()=>{ setTheme(theme === "dark" ? "light" : "dark")}}             
className={` border-2 mr-5 p-4 rounded-full transition-colors duration-300 ${theme === "dark" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}`}>
            {
                theme === "dark" ? (<  SunIcon className="w-6 h-6 text-yellow-400"/>) : (<MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-800"/>)
            }
        </button>
    )
}
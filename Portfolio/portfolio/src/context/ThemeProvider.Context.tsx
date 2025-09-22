"use client"

import React, { createContext, FC, useContext, useEffect, useState } from "react"




type ThemeContextType ={
    isDarkMode: boolean;
    toggleTheme: ()=>void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
type ReactNode ={
    children:React.ReactNode
}
export const ThemeProvider = ({children}:ReactNode)=>{

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    //load stored theme on mount

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
        }else{
            setIsDarkMode(false);
            document.documentElement.classList.add("dark")
        }

    },[])
      

    const toggleTheme =() =>{
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)
        localStorage.setItem("theme", newMode ? "dark":"light")


    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    };

   return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        {
            children
        }
    </ThemeContext.Provider>
   )


}

export const useTheme =()=>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used inside ThemeProvider");
           }

           return context;
}
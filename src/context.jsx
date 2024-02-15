import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const [searchTerm, setSearchTerm] = useState("wallpapers")

    // fn control logic
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        // const body = document.querySelector("body")
        // body.classList.toggle("dark-theme", newDarkTheme)

        // ** alternative setup **
        document.body.classList.toggle('dark-theme', newDarkTheme);
    };
    
    return (
        <AppContext.Provider value={{
            isDarkTheme,toggleDarkTheme, searchTerm, setSearchTerm   
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
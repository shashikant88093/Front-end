import { createContext,useState,ReactNode } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const UseThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});



const Theme = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <UseThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </UseThemeContext.Provider>

    )
}


export { UseThemeContext, Theme };
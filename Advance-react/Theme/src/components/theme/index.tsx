import { createContext, useContext, useState } from "react";
import React from 'react';
// import PropTypes from 'prop-types';

// create theme context
const Theme = createContext({
  theme: 'light',
  ToggleEvent: () => {}
});

//  Theme Provider Component

export const useTheme = ()=> useContext(Theme)

interface ThemeViewProps {
  color?: string;  // Making color optional since it's not used
  children: React.ReactNode;  // Add children prop
}

const ThemeView = ({children}: ThemeViewProps) => {

    const [theme,setTheme] = useState("light")
    
    const ToggleEvent = ()=>{
        setTheme((prevTheme)=> (prevTheme === 'light'? 'dark':'light'))

    }

    const value = {theme,ToggleEvent}

return (
    <Theme.Provider value={value}>
        {children}
    </Theme.Provider>
)

}


export default ThemeView


// ThemeView.PropTypes = {
    
// }
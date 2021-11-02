import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Education from './Education';
import Experience from './Experience';
import Greeting from './Greeting';
import Navbar from './Navbar';
import Skills from './Skills';
import { StyleProvider } from '../contexts/StyleContext'
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

    const changeTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <div>
            <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
                <Navbar />
                <Greeting />
                <Skills />
                <Education />
                <Experience />
            </StyleProvider>
        </div>
    )
}

export default Main

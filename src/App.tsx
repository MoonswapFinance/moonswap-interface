import React, { useState } from "react";
import  {GlobalStyle}  from "./styles/Global";
import styled, { ThemeProvider } from "styled-components";
import { color } from "./styles/color";
import Navbar from "./components/layout/nav/Navbar";
import { Hero, Solution, Start, Roadmap, Footer } from './components'
import './styles/Global.css'
import { Varables } from "./styles/Varables";

const Container = styled.div` 
  position: relative;
`
const LightTheme = {
background: `${color.normal}`,
fontColor: `${color.bgColor}`, 
roadBgColor: `${color.bgColor}`,
footerColor: `${color.footerltColor}`
}

const DarkTheme = {
  background: `${color.bgColor}`,
  fontColor: `${color.normal}`,
  roadBgColor: `${Varables.roadBg}`,
  footerColor: `${color.footerbgColor}`
}


function App() {
  const [theme, setTheme] = useState("dark");
  
  const toggleTheme = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
    <Container>
    <GlobalStyle />
    <Navbar theme={theme} toggleTheme={toggleTheme} /> 
    <Hero />
    <Solution/>
    <Start />
    <Roadmap />
    <Footer theme={theme} toggleTheme={toggleTheme} />
    </Container>
    </ThemeProvider>
  );
  }

export default App;
  
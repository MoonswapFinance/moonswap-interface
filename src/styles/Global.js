import { createGlobalStyle } from 'styled-components'
import { color } from './color'


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html{
    font-size: 15px;
    background: url(https://raw.githubusercontent.com/SVerseLab/images/master/coneback.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    z-index: 0;
    overflow-x: hidden;
}

/* scrollbar styling down over here */
/* width */
::-webkit-scrollbar {
  width: 5px;
  background: ${color.bgColor};
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 20px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${color.aq}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
`
import styled from "styled-components";
import { color } from "../../../styles/color";
import { device } from "../../../styles/size";
import { Varables } from "../../../styles/Varables";
import { motion } from 'framer-motion' 

export const StyledNav = styled(motion.div)`
 display: flex;
 align-items: center;
 padding: 0;
 justify-content: space-between;
 height: 70px;
 background: ${color.bgColor};
 border-bottom: ${Varables.borderB};
 position: fixed;
 width: 100%;
 z-index: 1;
`
export const LWrap = styled.div`
display: flex;
gap: 0;
cursor: pointer;

img{
    width: ${Varables.xlWidth};
}
h1{
    font-family: ${Varables.fontFamily};
    font-size: 25px;
    color: ${color.normal};
    transform: translateY(16px) translateX(-20px);
}

@media ${device.ipad} {
    img{
        width: ${Varables.smWidth};
        height: ${Varables.sHeight};
    }
    h1{
        font-size: 19px;
    }
}
@media ${device.mobileM}{
    img{
        width: ${Varables.xsWidth};
        height: ${Varables.xsHeight};
    }
    h1{
        font-size: 15px;
        transform: translateY(11px) translateX(-13px);
    }
}
`
export const NavLinks = styled.div`
 padding-right: 2rem;

 @media ${device.ipad} {
    display: none;
 }
`
export const NLink = styled(motion.a)`
display: inline-block;
text-decoration: none;
margin-right: 50px;
text-transform: uppercase;
font-weight: 600;
color: ${color.normal};

&:last-child{
    margin-right: 0;
}
&:hover{
    color: ${color.aq};
}
`
export const Launch = styled.button`
color: ${color.bgColor};
background: ${color.aq};
width: 150px;
letter-spacing: 2px;
border-radius: 5px;
font-family: ${Varables.textFont};
cursor: pointer;
padding: 13px;
`
export const ThemeIcon = styled(motion.div)`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
cursor: pointer;
color: ${({theme, colorTheme}) => colorTheme === 'light' ? `${color.aq}` : theme.fontColor};

`
export const NavMenu = styled.div`
 margin-left: 1rem;
 display: none;
 position: relative;
 z-index: 1;

svg{
    display: none;
    cursor: pointer;
    color: white;
}

@media ${device.ipad}{
    display: block;
}

svg{
    display: block;
}

@media ${device.ipad}{
    padding-right: 2rem;
}
`
export const NavMenuC = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    gap: 2rem;
    flex-direction: column;
    text-align: left;
    background: ${color.bgColor};
    padding: 2rem;
    position: fixed;
    top: 50px;
    right: 0;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 5 rgb(0,0,0,0.2);
    z-index: 1;
    
    a{
        border-bottom: ${Varables.borderBB};
        margin-right: 1rem 0;
    }

    @media ${device.ipad}{
        padding: 1rem;
    }
    @media ${device.mobileM}{
        padding: 1rem;
    }
`
export const LaunchBtn = styled.button`
color: ${color.bgColor};
background: ${color.aq};
width: 150px;
letter-spacing: 2px;
border-radius: 5px;
font-family: ${Varables.textFont};
cursor: pointer;
padding: 13px;
display: none;

@media ${device.ipad}{
    display: block;
}
`

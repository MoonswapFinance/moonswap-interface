import styled from "styled-components";
import { motion } from 'framer-motion' 
import { device } from "../../../styles/size";
import earth from './earth.png'
import { color } from "../../../styles/color";

export const StyledHero = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 4rem;
transform: translateY(7rem);
z-index: 0;
overflow: hidden;

@media ${device.ipad}{
    flex-direction: column;
    transform: translateY(2rem);
    padding: 1rem 2rem;
    justify-content: center;
}
@media ${device.mobileM}{
    padding: 5px 10px;
    transform: translateY(5rem);
}
`

export const HeroContent = styled.div`
 align-self: flex-start;
 margin-top: 80px;
 flex: 1;

 h1{
    font-size: 70px;
    font-weight: 600;
    line-height: 90px;
    span{
        color: #ffc14d;
        font-weight: 700;
        display: block;
    }
 }
p{
    margin: 5px 0px 5px 0px;
    margin-bottom: 1.5rem;
    margin-right: 55rem;
    font-weight: 700;
}

@media ${device.ipad}{
    h1{
        font-size: 40px;
        line-height: 60px;
    }
    p{
        margin-right: 5rem;
    }
  
}
@media ${device.mobileM}{
    h1{
        font-size: 30px;
        line-height: 55px;
    }
  
   
}

`

export const StyledBtn = styled(motion.div)`
display: flex;

button{
    display: inline-block;
    outline: none;
    background: none;
    border: 2px solid ${({theme, colorTheme}) => colorTheme === 'light' ? `${color.bgColor}` : theme.fontColor};
    padding: 17px 35px;
    margin-right: 20px;
    flex-wrap: wrap;
    border-radius: 10px;
    font-weight: 700;
    color: ${({theme}) => theme.fontColor};
}
@media ${device.mobileM}{
    /* flex-direction: column; */
    gap: 1rem;
    button{
    width: 80px;
    padding: 5px 8px;
    border-radius: 5px;
    }
}
`
export const Earth = styled.div`
            position: absolute;
            top: 70%;
            /* margin-top: 5rem; */
            left: 70%; 
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: url(${earth}); 
            background-color: ${color.bgColor};
            background-size: cover;
            background-repeat: repeat-x;
            border-radius: 50%;
            box-shadow: inset 0.0 20px rgba(0,0,0,1), 0 0 50px #4069ff;
            animation: animateEarth 25s linear infinite;

            @keyframes animateEarth {
            0%{
             background-position: 0 0;
            }
            100%{
                background-position: 750px 0;
            }
        }

        @media ${device.ipad}{
            width: 450px;
            height: 450px;
            left: 50%;
            /* top: 105%; */
            margin-top: 17rem;
            position: relative;
        }
        @media ${device.mobileM}{
            width: 200px;
            height: 200px;
          
        }
`
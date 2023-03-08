import styled from "styled-components";
import { motion } from 'framer-motion' 
import { color } from "../../../styles/color";
import { Varables } from "../../../styles/Varables";
import { device } from "../../../styles/size";

export const StyledSolution = styled(motion.div)`
margin-top: 10rem;
padding: 2rem 4rem;
margin-bottom: 5rem;

@media ${device.ipad}{
  margin-top: 7rem;
}
@media ${device.mobileM}{
  padding: 10px 10px;
  margin-top: 13rem;
}
`
export const BG = styled.div`
    /* z-index: -1; */
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    margin-top: 7rem;
    background: ${color.bgColor};
    /* vertical-align: baseline; */

    @media ${device.ipad}{
      margin-top: 3rem;
      width: 100%;
      overflow: hidden;
    }
    @media ${device.mobileM}{
      width: 100%;
      overflow-x: hidden;
    }

`

export const SText = styled.div`
margin-left: 1rem;


h3{
  font-size: 2rem;
  background-image: linear-gradient(to left,aqua,lightblue,red,black);
  -webkit-background-clip: text;
  margin-top: -3rem;
  color: transparent;
  font-family: ${Varables.fontFamily};
}
h1{
  font-size: 5rem;
  font-weight: 800;
  font-family: ${Varables.fontFamily};
  color: ${({theme, colorTheme}) => colorTheme === 'light' ? `${color.bgColor}` : color.normal};
}

@media ${device.ipad}{
  h3{
    font-size: 1.5rem;
  }
  h1{
    font-size: 3rem;
  }
}
@media ${device.mobileM}{
  h3{
    font-size: 18px;
  }
  h1{
    font-size: 2rem;
  }
}
`
export const CardItemH = styled(motion.div)`
display: flex;
flex-wrap: wrap;
`